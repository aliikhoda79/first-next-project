# استفاده از ایمیج پایه رسمی نود
FROM node:14

# تنظیم دایرکتوری کاری در داخل کانتینر
WORKDIR /app

# کپی کردن package.json و package-lock.json به داخل دایرکتوری کاری
COPY package.json package-lock.json ./

# نصب وابستگی‌ها
RUN npm install

# کپی کردن بقیه فایل‌های پروژه به داخل دایرکتوری کاری
COPY . .

# ساخت پروژه
RUN npm run build

# مشخص کردن پورت
EXPOSE 3000

# اجرای پروژه
CMD ["npm", "start"]
