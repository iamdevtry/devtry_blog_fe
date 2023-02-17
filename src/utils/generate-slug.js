import slugify from 'slugify';

const generateSlug = (str) => {
    return slugify(str, {
        lower: true,
        locale: 'vi',
        trim: true,
    });
};

export default generateSlug;
