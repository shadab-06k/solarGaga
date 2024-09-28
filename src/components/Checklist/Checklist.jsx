import React, { useState } from "react";
import "./Checklist.css";
import Registry from "../Registry/Registry";

const Checklist = () => {
  const [systemDevicePhotoFile, setSystemDevicePhotoFile] = useState(null);
  const [sptCertificateFile, setSptCertificateFile] = useState(null);
  const [photoOfPanelFile, setPhotoOfPanelFile] = useState(null);
  const [isSystemDeviceChecked, setIsSystemDeviceChecked] = useState(false);
  const [isSptCertificateChecked, setIsSptCertificateChecked] = useState(false);
  const [isPhotoOfPanelChecked, setIsPhotoOfPanelChecked] = useState(false);

  const authToken = sessionStorage.getItem("authToken"); // Replace with your actual auth token

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure all checkboxes are checked before submitting
    if (
      !isSystemDeviceChecked ||
      !isSptCertificateChecked ||
      !isPhotoOfPanelChecked
    ) {
      alert("Please check all checkboxes before uploading files.");
      return;
    }

    // Ensure all files are selected
    if (!systemDevicePhotoFile || !sptCertificateFile || !photoOfPanelFile) {
      alert("Please select all files before submitting.");
      return;
    }

    // Create formData to append all the files
    const formData = new FormData();
    formData.append("systemDevicePhotoFile", systemDevicePhotoFile);
    formData.append("sptCertificateFile", sptCertificateFile);
    formData.append("photoOfPanelFile", photoOfPanelFile);

    try {
      const res = await fetch(
        `http://localhost:8000/api/checklist/uploadFiles`,
        {
          method: "POST",
          headers: {
            "auth-token": `Bearer ${authToken}`,
          },
          body: formData,
        }
      );

      const data = await res.json();
      if (res.ok) {
        console.log("Files uploaded successfully:", data);
        alert("Files uploaded successfully.");
        setSystemDevicePhotoFile(null);
        setSptCertificateFile(null)
        setPhotoOfPanelFile(null);
        setIsSystemDeviceChecked(false);
        setIsSptCertificateChecked(false);
        setIsPhotoOfPanelChecked(false);
         // Optionally, you can also reset the file inputs using this method
         e.target.reset();
      } else {
        console.error("Error uploading files:", data.message);
        alert("Error uploading files.");
      }
    } catch (error) {
      console.error("Error uploading files:", error);
      alert("Error uploading files.");
    }
  };

  return (
    <div className="main">
      <Registry/>
      <div className="whole-checklist-container">
        <form onSubmit={handleSubmit}>
          <div>
            <h2 className="heading-check">Checklist Of Document</h2>
          </div>

          <div className="d-flex align-items-start justify-content-between row-container">
            {/* First Column - System/Device Photo */}
            <div className="d-flex flex-column align-items-start check-box1">
              <div className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  name="System/Device Photo"
                  id="systemDevicePhoto"
                  required
                  onChange={(e) => setIsSystemDeviceChecked(e.target.checked)}
                />
                <p className="mx-1">System/Device Photo</p>
                <span className="asterisk">*</span>
              </div>
              <input
                type="file"
                className="my-2"
                disabled={!isSystemDeviceChecked}
                onChange={(e) => setSystemDevicePhotoFile(e.target.files[0])}
              />
            </div>

            {/* Second Column - SPT Certificate */}
            <div className="d-flex flex-column align-items-start check-box1">
              <div className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  name="SPT Certificate"
                  id="sptCertificate"
                  onChange={(e) => setIsSptCertificateChecked(e.target.checked)}
                />
                <p className="mx-1">SPT Certificate</p>
              </div>
              <input
                type="file"
                className="my-2"
                disabled={!isSptCertificateChecked}
                onChange={(e) => setSptCertificateFile(e.target.files[0])}
              />
            </div>

            {/* Third Column - Photo of Panel */}
            <div className="d-flex flex-column align-items-start check-box1">
              <div className="d-flex align-items-center mb-2">
                <input
                  type="checkbox"
                  name="Photo of Panel"
                  id="photoOfPanel"
                  onChange={(e) => setIsPhotoOfPanelChecked(e.target.checked)}
                />
                <p className="mx-1">Photo of Panel</p>
              </div>
              <input
                type="file"
                className="my-2"
                disabled={!isPhotoOfPanelChecked}
                onChange={(e) => setPhotoOfPanelFile(e.target.files[0])}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="last-submit-button-container">
            <button className="last-submit-button" type="submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checklist;

// import React, { useState } from "react";
// import "./Checklist.css";

// const Checklist = () => {
//   const [systemDevicePhotoFile, setSystemDevicePhotoFile] = useState(null);
//   const [sptCertificateFile, setSptCertificateFile] = useState(null);
//   const [photoOfPanelFile, setPhotoOfPanelFile] = useState(null);
//   const authToken = sessionStorage.getItem('authToken'); // Replace with your actual auth token
//   const [check, setCheck] = useState(false)

//   const onUploadSystemDevicePhotoFile = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("systemDevicePhotoFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/systemDevicePhotoFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("System Device Photo File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSystemDevicePhotoFile = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSystemDevicePhotoFile(file);
//     }
//   };

//   const onUploadSptCertificateFile = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("sptCertificateFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/sptCertificateFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("SPT Certificate File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSptCertificateFileChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setSptCertificateFile(file);
//     }
//   };

//   const onUploadPhotoOfPanelFile = async (file) => {
//     try {
//       const formData = new FormData();
//       formData.append("photoOfPanelFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/photoOfPanelFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("Photo of Panel File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handlePhotoOfPanelFile = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setPhotoOfPanelFile(file);
//     }
//   };

//   return (
//     <div className="main">
//       <div className="whole-checklist-container">
//         <div>
//           <h2 className="heading-check">Checklist Of Document</h2>
//         </div>

//         <div className="d-flex align-items-start justify-content-between row-container">
//           {/* First Column - System/Device Photo */}
//           <div className="d-flex flex-column align-items-start check-box1">
//             <div className="d-flex align-items-center mb-2">
//               <input
//                 type="checkbox"
//                 name="System/Device Photo"
//                 id="systemDevicePhoto"
//                 required
//               />
//               <p className="mx-1">System/Device Photo</p>
//               <span className="asterisk">*</span>
//             </div>
//             <input
//               type="file"
//               className="my-2"
//               onChange={handleSystemDevicePhotoFile}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={() => onUploadSystemDevicePhotoFile(systemDevicePhotoFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>

//           {/* Second Column - SPT Certificate */}
//           <div className="d-flex flex-column align-items-start check-box1">
//             <div className="d-flex align-items-center mb-2">
//               <input type="checkbox" name="SPT Certificate" id="sptCertificate" />
//               <p className="mx-1">SPT Certificate</p>
//             </div>
//             <input
//               type="file"
//               className="my-2"
//               onChange={handleSptCertificateFileChange}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={() => onUploadSptCertificateFile(sptCertificateFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>

//           {/* Third Column - Photo of Panel */}
//           <div className="d-flex flex-column align-items-start check-box1">
//             <div className="d-flex align-items-center mb-2">
//               <input type="checkbox" name="Photo of Panel" id="photoOfPanel" />
//               <p className="mx-1">Photo of Panel</p>
//             </div>
//             <input
//               type="file"
//               className="my-2"
//               onChange={handlePhotoOfPanelFile}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={() => onUploadPhotoOfPanelFile(photoOfPanelFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <div className="last-submit-button-container">
//         <button className="last-submit-button" type="submit">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checklist;

// import React, { useState } from "react";
// import "./Checklist.css";

// const Checklist = () => {
//   // const [file, setFile] = useState(null);
//   const [systemDevicePhotoFile, setSystemDevicePhotoFile] = useState(null);
//   const [sptCertificateFile, setSptCertificateFile] = useState(null);
//   const [photoOfPanelFile, setPhotoOfPanelFile] = useState(null);

//   const onUploadSystemDevicePhotoFile = async (file) => {
//     try {
//       const authToken = sessionStorage.getItem('authToken')
//       const formData = new FormData();
//       formData.append("systemDevicePhotoFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/systemDevicePhotoFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("system Device Photo File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSystemDevicePhotoFile = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setSystemDevicePhotoFile(file.name);
//     }
//   };

//   const onUploadSptCertificateFile = async (file) => {
//     try {
//       const authToken = sessionStorage.getItem('authToken')

//       const formData = new FormData();
//       formData.append("sptCertificateFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/sptCertificateFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("spt Certificate File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handleSptCertificateFileChange = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setSptCertificateFile(file.name);
//     }
//   };

//   const onUploadPhotoOfPanelFile = async (file) => {

//     try {
//       const authToken = sessionStorage.getItem('authToken')

//       const formData = new FormData();
//       formData.append("photoOfPanelFile", file);

//       const res = await fetch(
//         `http://localhost:8000/api/checklist/photoOfPanelFile`,
//         {
//           method: "POST",
//           headers: {
//             "auth-token": `Bearer ${authToken}`,
//           },
//           body: formData,
//         }
//       );

//       const data = await res.json();
//       if (res.ok) {
//         console.log("system Device Photo File uploaded successfully:", data);
//       } else {
//         console.error("Error uploading file:", data.message);
//       }
//     } catch (error) {
//       console.error("Error uploading file:", error);
//     }
//   };

//   const handlePhotoOfPanelFile = (e) => {
//     const file = e.target.files[0];

//     if (file) {
//       setPhotoOfPanelFile(file.name);
//     }
//   };

//   return (
//     <div className="main">
//       <div className="whole-checklist-container">
//         <div>
//           <h2 className="heading-check">Checklist Of Document</h2>
//         </div>

//         <div className="d-flex align-items-start justify-content-between row-container">
//           {/* First Column - System/Device Photo and SPT Certificate */}
//           <div className="d-flex flex-column align-items-start check-box1">
//             {/* System/Device Photo */}
//             <div className="d-flex align-items-center mb-2">
//               <input
//                 type="checkbox"
//                 name="System/Device Photo"
//                 id="systemDevicePhoto"
//                 required
//               />
//               <p className="mx-1">System/Device Photo</p>
//               <span className="asterisk">*</span>
//             </div>
//             <input
//               type="file"
//               // id="File"
//               className="my-2"
//               onChange={(e) => handleSystemDevicePhotoFile(e)}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={onUploadSystemDevicePhotoFile(systemDevicePhotoFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>

//           <div className="d-flex flex-column align-items-start check-box1">
//             <div className="d-flex align-items-center mb-2">
//               <input type="checkbox" name="SPT Certificate" id="photoOfPanel" />
//               <p className="mx-1">SPT Certificate</p>
//             </div>
//             <input
//               type="file"
//               // id="File"
//               className="my-2"
//               onChange={(e) => handleSptCertificateFileChange(e)}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={onUploadSptCertificateFile(sptCertificateFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>

//           {/* Second Column */}
//           <div className="d-flex flex-column align-items-start check-box1">
//             <div className="d-flex align-items-center mb-2">
//               <input type="checkbox" name="Photo of panel" id="photoOfPanel" />
//               <p className="mx-1">Photo of panel</p>
//             </div>
//             <input
//               type="file"
//               // id="File"
//               className="my-2"
//               onChange={(e) => handlePhotoOfPanelFile(e)}
//             />
//             <button
//               type="button"
//               className="btn button-cust"
//               onClick={onUploadPhotoOfPanelFile(photoOfPanelFile)}
//             >
//               <span className="ml-2">Upload File</span>
//             </button>
//           </div>
//         </div>
//       </div>
//       <div className="last-submit-button-container">
//         <button className="last-submit-button" type="sumbit">
//           Submit
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Checklist;
