import ReactQuill, { Quill } from 'react-quill';
import ImageUploader from 'quill-image-uploader';
import 'react-quill/dist/quill.snow.css';

Quill.register('modules/imageUploader', ImageUploader);

const options = {
    modules: {
        toolbar: [
            [{ header: [2, 3, 4, 5, 6, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
            ['link', 'image', 'video'],
            ['clean'],
        ],
        imageUploader: {
            upload: (file) => {
                return new Promise((resolve, reject) => {
                    const formData = new FormData();
                    formData.append('file', file);

                    fetch('http://localhost:8080/v1/upload', {
                        method: 'POST',
                        body: formData,
                    })
                        .then((response) => response.json())
                        .then((result) => {
                            console.log(result);
                            resolve(result.data.url);
                        })
                        .catch((error) => {
                            reject('Upload failed');
                            console.error('Error:', error);
                        });
                });
            },
        },
    },
    formats: [
        'header',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'indent',
        'link',
        'image',
    ],
    theme: 'snow',
};

const Editor = () => {
    const handleContentChange = (e) => {
        console.log(e);
    };

    return (
        <div className="text-editor">
            <ReactQuill {...options} onChange={(e) => handleContentChange(e)}></ReactQuill>
        </div>
    );
};

export default Editor;
