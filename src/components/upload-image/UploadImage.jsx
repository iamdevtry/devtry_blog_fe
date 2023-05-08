import React, { useEffect } from 'react';
import axios from 'axios';
import Upload from 'rc-upload';
import { Image, Button, Typography, Spin } from 'antd';
import { DeleteOutlined, PlusCircleOutlined, LoadingOutlined } from '@ant-design/icons';
import authHeader from '../../services/authHeader';
import './upload-image.scss';

const { Text } = Typography;

const uploadProps = {
    action: 'https://devtry.me/v1/upload',
    multiple: false,
    data: { a: 1, b: 2 },
    headers: authHeader(),
    onStart(file) {
        console.log('onStart', file, file.name);
    },
    onSuccess(res, file) {
        console.log('onSuccess', res, file.name);
    },
    onError(err) {
        console.log('onError', err);
    },
    onProgress({ percent }, file) {
        console.log('onProgress', `${percent}%`, file.name);
    },
    customRequest({
        action,
        data,
        file,
        filename,
        headers,
        onError,
        onProgress,
        onSuccess,
        withCredentials,
    }) {
        // EXAMPLE: post form-data with 'axios'
        // eslint-disable-next-line no-undef
        const formData = new FormData();
        if (data) {
            Object.keys(data).forEach((key) => {
                formData.append(key, data[key]);
            });
        }
        formData.append(filename, file);

        axios
            .post(action, formData, {
                withCredentials,
                headers,
                onUploadProgress: ({ total, loaded }) => {
                    onProgress({ percent: Math.round((loaded / total) * 100).toFixed(2) }, file);
                },
            })
            .then(({ data: response }) => {
                onSuccess(response, file);
            })
            .catch(onError);

        return {
            abort() {
                console.log('upload progress is aborted.');
            },
        };
    },
};

const antIcon = (
    <LoadingOutlined
        style={{
            fontSize: 24,
        }}
        spin
    />
);
const UploadImage = (props) => {
    const { defaultImage, onSuccess } = props;
    const [imageUploaded, setImageUploaded] = React.useState(null);
    const [uploadError, setUploadError] = React.useState(null);
    const [uploading, setUploading] = React.useState(false);

    const handleUploadSuccess = (res) => {
        setImageUploaded(res.data);
        onSuccess(res.data);
    };

    const handleUploadError = (err) => {
        setUploadError(err);
    };

    const handleOnProgress = ({ percent }) => {
        setUploading(true);
        console.log(typeof percent);
        //convert string to number
        percent = Number(percent);
        console.log(percent);
        if (percent === 100) {
            setUploading(false);
        }
    };

    const handleStartUpload = () => {
        setUploading(true);
        setImageUploaded(null);
        setUploadError(null);
    };

    const handleDeleteImage = () => {
        setImageUploaded(null);
    };

    useEffect(() => {
        if (defaultImage) {
            setImageUploaded(defaultImage);
        }
    }, [defaultImage]);

    return (
        <div className="custom-upload-image">
            <div>
                <Spin indicator={antIcon} spinning={uploading} />
                {!imageUploaded ? (
                    <Upload
                        {...uploadProps}
                        onSuccess={handleUploadSuccess}
                        onError={handleUploadError}
                        onProgress={handleOnProgress}
                    >
                        {uploadError && (
                            <Text type="danger">
                                Something went wrong... Try again! {uploadError.message}
                            </Text>
                        )}
                        <Button
                            className="custom-upload-image__btn"
                            type="primary"
                            shape="circle"
                            icon={<PlusCircleOutlined />}
                            onClick={handleStartUpload}
                        />
                    </Upload>
                ) : (
                    <>
                        <Image
                            className="custom-upload-image__img"
                            width={100}
                            src={imageUploaded?.url}
                        />
                        <Button
                            className="custom-upload-image__btn"
                            danger
                            type="primary"
                            shape="circle"
                            icon={<DeleteOutlined />}
                            onClick={handleDeleteImage}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default UploadImage;
