module.exports = {
	reactStrictMode: true,
	NEXT_APP_BASE_URL: process.env.NODE_ENV === 'production' ? 'https://onlinehatt-major.vercel.app' : 'http://localhost:3000',
	NEXT_APP_MONGODB_URL:
		'mongodb+srv://mern_admin:passadmin@cluster0.qcz4l.mongodb.net/database?retryWrites=true&w=majority',
	NEXT_APP_ACCESS_TOKEN_SECRET: 'YOUR_ACCESS_TOKEN_SECRET',
	NEXT_APP_REFRESH_TOKEN_SECRET: 'YOUR_REFRESH_TOKEN_SECRET',
	NEXT_APP_PAYPAL_CLIENT_ID:
		'AXnPNg6vFQeUKSoBS7OmSn_bIPPc3MIHJerMdVggsit_fugt3L4zwCdmszZhSIsYo730IGWUgLpxrFGb',
	NEXT_APP_CLOUD_UPDATE_PRESET: 'onlinehatt-major',
	NEXT_APP_CLOUD_NAME: 'aditya-media',
	NEXT_APP_CLOUD_API:
		'https://api.cloudinary.com/v1_1/aditya-media/image/upload',
};
