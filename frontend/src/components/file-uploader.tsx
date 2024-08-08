"use client";
import { FileUploaderRegular, OutputFileEntry } from "@uploadcare/react-uploader";
import { CheckCircle2Icon } from "lucide-react";
import { useState } from "react";

interface FileUploaderProps {
    value?: string | undefined;
    onChange: (url: string) => void;
}

export default function FileUploader({ onChange }: FileUploaderProps) {

    const [fileUploaded, setFileUploaded] = useState<boolean>(false)

    return (
        <div className="relative w-fit flex space-x-3 items-center">
            <FileUploaderRegular
                pubkey="822c5b92b05043b370da"
                ctxName="form-image-url-upload"
                maxLocalFileSizeBytes={5000000}
                multiple={false}
                imgOnly={true}
                sourceList="local, url, camera"
                classNameUploader="my-file-uploader-config"
                onFileUploadSuccess={(file: OutputFileEntry) => {
                    const url = file.cdnUrl as string;
                    // console.log(url);
                    onChange(url);
                    setFileUploaded(true);
                }}
            />

            {fileUploaded && <CheckCircle2Icon color="#15803d" />}
        </div>
    );
}
