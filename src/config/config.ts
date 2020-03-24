export const config = {
  "dev": {
    "username": process.env.POSTGRESS_USERNAME, //"sa",
    "password": process.env.POSTGRESS_PASSWORD, //"zojjy2-rodjot-symqEr",
    "database": process.env.POSTGRESS_DB, //"udagramkingsforddev",
    "host": process.env.POSTGRESS_HOST, //"udagramkingsforddev.cx0vrtj4wmei.us-east-2.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": process.env.AWS_REGION,
    "aws_profile": process.env.AWS_PROFILE,
    "aws_media_bucket": process.env.AWS_BUCKET,
  },
  "prod": {
    "username": "",
    "password": "",
    "database": "udagram_prod",
    "host": "",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": process.env.JWT_SECRET
  }

}
