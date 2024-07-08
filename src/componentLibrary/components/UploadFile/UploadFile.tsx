import React, { useMemo, useState, useCallback } from "react";
import "./uploadFile.css";
import Button from "../Button/Button";
import clsx from "clsx";
import { CloudArrowUpIcon, TrashIcon } from "@heroicons/react/24/solid";
import { useDropzone } from "react-dropzone";

interface ClassName {
  container?: string;
  uploadFile?: string;
}

interface UploadFileProps {
  disabled?: boolean;
  maxFiles?: number;
  accept?: { [key: string]: string[] };
  name?: string;
  id?: string;
  className?: ClassName;
}

const UploadFile: React.FC<UploadFileProps> = ({
  disabled,
  maxFiles = 1,
  accept = {
    "text/csv": [".csv"],
    "application/vnd.ms-excel": [".xls"],
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
      ".xlsx",
    ],
  },
  name,
  id,
  className = {
    container: "",
    uploadFile: "",
  },
  ...props
}) => {
  const [myFiles, setMyFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setMyFiles([...myFiles, ...acceptedFiles]);
    // eslint-disable-next-line
  }, []);

  const {
    getRootProps,
    getInputProps,
    open,
    isDragAccept,
    isDragReject,
    fileRejections,
  } = useDropzone({
    onDrop,
    multiple: maxFiles > 1,
    maxFiles: maxFiles,
    accept: accept,
  });

  const removeFile = (file) => () => {
    const newFiles = [...myFiles];
    newFiles.splice(newFiles.indexOf(file), 1);
    setMyFiles(newFiles);
  };

  // const removeAll = () => {
  //   setMyFiles([]);
  // };

  const files = myFiles.map((file) => (
    <li key={file.path}>
      {/* {file.path} - {file.size} bytes{" "} */}
      <Button
        context="text"
        onClick={removeFile(file)}
        suffixIcon={<TrashIcon />}
      >
        {file.path}
      </Button>
    </li>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));

  return (
    <div
      className={clsx(
        "oui-upload-file",
        disabled && "oui-upload-file--disabled",
        className.container
      )}
      {...props}
    >
      <div className={clsx("oui-upload-file__rectangle", className.uploadFile)}>
        <div
          {...getRootProps({
            className: `oui-upload-file__dropzone ${isDragAccept ? "oui-upload-file__dropzone--accept" : ""}${isDragReject ? "oui-upload-file__dropzone--reject" : ""}`,
          })}
        >
          <input {...getInputProps()} id={id} disabled={disabled} />
          <CloudArrowUpIcon className="oui-upload-file__icon" />
          <label className="oui-upload-file__label" htmlFor={id}>
            Drag and drop your file
          </label>
          <span className="oui-upload-file__sub-label">or</span>
          <div className="oui-upload-file__action-container">
            <Button type="button" onClick={open} disabled={disabled}>
              Browse file
            </Button>
          </div>
        </div>
        {/* {files.length > 0 && <button onClick={removeAll}>Remove All</button>} */}
      </div>
      <aside>
        {files.length > 0 && <ul>{files}</ul>}
        {fileRejectionItems.length > 0 && <ul>{fileRejectionItems}</ul>}
      </aside>
    </div>
  );
};

export default UploadFile;
