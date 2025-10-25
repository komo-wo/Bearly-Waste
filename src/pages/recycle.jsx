import { useState, useRef } from "react";
import * as mobilenet from "@tensorflow-models/mobilenet";
import "@tensorflow/tfjs";
import Webcam from "react-webcam";

export default function Recycle({ onAddXP }) {
  const [mode, setMode] = useState(null); // null, "upload", or "camera"
  const [imagePreview, setImagePreview] = useState(null);
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const webcamRef = useRef();

  // Analyze image with MobileNet
  async function analyzeImage(imgEl) {
    setLoading(true);
    const model = await mobilenet.load();
    const predictions = await model.classify(imgEl);
    console.log(predictions);

    const item = predictions[0].className.toLowerCase();
    let category = "";

    if (
      item.includes("bottle") ||
      item.includes("can") ||
      item.includes("cardboard") ||
      item.includes("plastic")
    ) {
      category = "♻️ Recyclable! +5 XP";
      onAddXP?.(5);
    } else if (
      item.includes("banana") ||
      item.includes("apple") ||
      item.includes("food") ||
      item.includes("leaf")
    ) {
      category = "🌱 Compostable! +3 XP";
      onAddXP?.(3);
    } else {
      category = "🗑️ Probably Trash.";
    }

    setResult(`${category} (Detected: ${item})`);
    setLoading(false);
  }

  // Upload photo
  async function handleUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setImagePreview(url);
    setMode("upload");

    const img = new Image();
    img.src = url;
    img.onload = () => analyzeImage(img);
  }

  // Capture photo from live camera
  async function handleCapture() {
    if (!webcamRef.current) return;

    const imageSrc = webcamRef.current.getScreenshot();
    setImagePreview(imageSrc);

    const img = new Image();
    img.src = imageSrc;
    img.onload = () => analyzeImage(img);
  }

  return (
    <div className="flex-1 flex flex-col items-center justify-center p-4 text-center">
      <h2 className="text-2xl font-bold text-emerald-700 mb-4">
        Identify an Item
      </h2>

      {/* Upload Photo */}
      <label className="px-6 py-3 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700 cursor-pointer mb-3">
        📁 Upload Photo
        <input
          type="file"
          accept="image/*"
          onChange={handleUpload}
          className="hidden"
        />
      </label>

      {/* Live Camera */}
      <button
        onClick={() => setMode("camera")}
        className="px-6 py-3 bg-emerald-100 text-emerald-700 rounded-xl shadow hover:bg-emerald-200 mb-4"
      >
        📸 Open Live Camera
      </button>

      {/* Camera view */}
      {mode === "camera" && (
        <div className="flex flex-col items-center">
          <Webcam
            ref={webcamRef}
            audio={false}
            screenshotFormat="image/jpeg"
            width={300}
            className="rounded-xl border border-emerald-300 mb-3"
            videoConstraints={{
              facingMode: "environment", // use back camera on phones
            }}
          />
          <button
            onClick={handleCapture}
            className="px-5 py-2 bg-emerald-600 text-white rounded-xl shadow hover:bg-emerald-700"
          >
            Capture Photo
          </button>
        </div>
      )}

      {/* Image Preview */}
      {imagePreview && (
        <img
          src={imagePreview}
          alt="preview"
          className="w-48 h-48 object-cover rounded-xl border border-emerald-300 mt-4"
        />
      )}

      {/* Results */}
      {loading && <p className="text-gray-600 mt-3">Analyzing image... ⏳</p>}
      {result && <p className="mt-3 text-lg">{result}</p>}
    </div>
  );
}
