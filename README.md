# E-Commerce Microservices Project

## Cấu trúc Microservice

Dự án được thiết kế theo mô hình **Microservice Architecture** kết hợp tư tưởng **Clean Architecture**  
→ đảm bảo tính **module hóa**, **loose coupling** và dễ dàng mở rộng.


- Mỗi service chạy độc lập (Node.js + Express)
- Giao tiếp giữa các service qua **REST API** hoặc **RabbitMQ**
- Dữ liệu lưu trong **MongoDB** (mỗi service có database riêng)
---

### Cấu trúc thư mục chính
- api-gateway/ — API gateway
- - api_test/ — ảnh chụp màn hình các API tests (cho cái README)
- auth/ — authentication microservice
- product/ — product microservice
- order/ — order microservice
- utils/ — helper chung

---
## Công nghệ sử dụng

- **Node.js / Express.js** – backend framework  
- **MongoDB / Mongoose** – cơ sở dữ liệu NoSQL  
- **Postman** – kiểm thử API  
---

##  Ví dụ một số ảnh test API
### Register user: 
![image_alt](https://github.com/Kevinkien25/EProject-Phase-2/blob/9da8df44361ed00d952a3e225ad1f46a535d557a/api-test/register.png)

### Login: 
![image_alt](https://github.com/Kevinkien25/EProject-Phase-2/blob/9da8df44361ed00d952a3e225ad1f46a535d557a/api-test/login.png)

### Add Product:
![image_alt](https://github.com/Kevinkien25/EProject-Phase-2/blob/9da8df44361ed00d952a3e225ad1f46a535d557a/api-test/post-product.png)

### Get Product:
![image_alt](https://github.com/Kevinkien25/EProject-Phase-2/blob/de362c8eac788c56764a82b6102a26b965baa75c/api-test/get-product.png)

### Post Order Product:
![image_alt](https://github.com/Kevinkien25/EProject-Phase-2/blob/9da8df44361ed00d952a3e225ad1f46a535d557a/api-test/post-order-product.png)
