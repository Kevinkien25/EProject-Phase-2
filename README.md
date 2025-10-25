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

## 🧪 Ví dụ một số ảnh test API
### Register user: 
![Register User](../api_test/register.png)

### Login: 
![Login](api_test/login.png)

### Add Product:
![Add Product](api_test/post-product.png)

### Get Product:
![Get Product](api_test/get-product.png)

### Post Order Product:
![Post Order Product](api_test/post-order-product.png)
