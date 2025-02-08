export const downloadFile = (file_url: string) => {
    
    const anchor = document.createElement('a');
    anchor.style.display = 'none';
    document.body.appendChild(anchor);
    anchor.href = file_url;
    anchor.download = file_url; // Keep the original filename

    // Trigger download
    anchor.click();

    // Cleanup
    document.body.removeChild(anchor);
   
};
