"use client";
import { FileUploaderRegular, UploadcareFile, OutputFileEntry } from "@uploadcare/react-uploader";

interface FileUploaderProps {
    setFileUploaded: (uploaded: boolean) => void;
    value: string | undefined;
    onChange: (url: string) => void;
}

export default function FileUploader({ setFileUploaded, value, onChange }: FileUploaderProps) {

    return (
        <div>
            <FileUploaderRegular
                pubkey="822c5b92b05043b370da"
                maxLocalFileSizeBytes={5000000}
                multiple={false}
                imgOnly={true}
                sourceList="local, url, camera"
                classNameUploader="my-file-uploader-config"
                onFileUploadSuccess={(file: OutputFileEntry) => {
                    const url = file.cdnUrl as string;
                    console.log(url);
                    onChange(url);
                    setFileUploaded(true);
                }}
            />
        </div>
    );
}
