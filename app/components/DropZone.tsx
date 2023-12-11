"use client";

import { cn } from "@/lib/utils";
import Dropzone from "react-dropzone";

export default function DropZone() {
  // 1MB = 1048576 bytes
  const maxFileSize = 1048576;

  return (
    <Dropzone
      minSize={0}
      maxSize={maxFileSize}
      onDrop={(acceptedFiles) => console.log(acceptedFiles)}
    >
      {({
        getRootProps,
        getInputProps,
        isDragActive,
        isDragReject,
        fileRejections,
      }) => {
        const isFileTooLarge =
          fileRejections.length > 0 &&
          fileRejections[0].file.size > maxFileSize;
        return (
          <section>
            <div {...getRootProps()} className={cn(
                "p-4",
                "border-2",
                "border-dashed",
                "rounded-lg",
                "text-center",
                "cursor-pointer",
                "hover:border-gray-400",
                "transition-colors",
                "ease-in-out",
                "duration-300",
                isDragActive && "border-gray-400",
                isDragReject && "border-red-400",
                isFileTooLarge && "border-red-400",
                
            )}>
              <input {...getInputProps()} />

              {isDragActive ? (
                <p>Drop files here...</p>
              ) : (
                <p>Drag drop some files here, or click to select files</p>
              )}

              {isDragReject && <p>Unsupported file type...</p>}
              {fileRejections.length > 0 && <p>Rejected files...</p>}

              {isFileTooLarge && (
                <p>File is too large. Max file size is 1MB.</p>
              )}
            </div>
          </section>
        );
      }}
    </Dropzone>
  );
}
