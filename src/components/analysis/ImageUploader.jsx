import React, { useState, useRef } from 'react';
import { Upload, Image as ImageIcon, X, RefreshCw, ArrowRight, CheckCircle2 } from 'lucide-react';
import Button from '../common/Button';

const ImageUploader = ({ onImageSelect, selectedImage, onClear }) => {
  const [dragActive, setDragActive] = useState(false);
  const fileInputRef = useRef(null);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      onImageSelect(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="w-full space-y-6">
      {selectedImage ? (
        <div className="relative rounded-3xl overflow-hidden border border-rose-200 shadow-beauty-md bg-black/5 group">
          <img
            src={selectedImage}
            alt="Selected Selfie Preview"
            className="w-full h-80 sm:h-96 object-cover object-center"
          />
          <div className="absolute inset-0 bg-plum-950/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
            <Button
              variant="secondary"
              size="sm"
              icon={RefreshCw}
              onClick={() => fileInputRef.current?.click()}
            >
              Change Photo
            </Button>
            <Button variant="danger" size="sm" icon={X} onClick={onClear}>
              Remove
            </Button>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
        </div>
      ) : (
        <div
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={() => fileInputRef.current?.click()}
          className={`border-2 border-dashed rounded-3xl p-8 sm:p-12 text-center cursor-pointer transition-all duration-300 flex flex-col items-center justify-center ${
            dragActive
              ? 'border-rose-400 bg-rose-50/80 scale-[1.01]'
              : 'border-plum-200 bg-white hover:border-rose-300 hover:bg-rose-50/30'
          }`}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />
          <div className="w-16 h-16 rounded-full bg-rose-100 text-plum-800 flex items-center justify-center mb-4 shadow-sm">
            <Upload className="w-8 h-8" />
          </div>
          <h3 className="text-lg font-serif font-semibold text-plum-950 mb-1">
            Drag & Drop your selfie here
          </h3>
          <p className="text-xs text-charcoal-500 mb-4">
            Supports PNG, JPG, or WEBP (Max 10MB)
          </p>
          <Button variant="secondary" size="sm" icon={ImageIcon}>
            Browse Local File
          </Button>
        </div>
      )}

      {/* Quality Requirements checklist */}
      <div className="bg-plum-50/70 p-4 rounded-2xl border border-rose-100/80 text-xs space-y-2">
        <p className="font-bold text-plum-900 tracking-wider uppercase text-[10px]">Photo Requirements for Best AI Results:</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-charcoal-700">
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Face clearly visible</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Good soft lighting</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> No heavy sunglasses</div>
          <div className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Look straight ahead</div>
        </div>
      </div>
    </div>
  );
};

export default ImageUploader;
