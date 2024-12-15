1. Setup dự án
    + Tạo 1 folder src.
    + Tạo dự án với: npm init -y.
    + Tạo các thư mục cần tạo như: controllers, services, models, configs, utils, env,...
    + Tạo file server.js ở ngoài thư mục src. bằng với file .gitignore và .env, tạo file app.js ở trong thư mục src.
    + Cài express với câu lệnh: npm i express.
    + Trong file app.js connect với exprexx bằng module ES6+ hoặc dùng require bình thường.
    + Từ export của bên app.js ở file server.js connect với server để dev.
    + Chạy node server.js để test.
      
2. Cài các package ở file app.js để dev ( dùng node --watch server.js để check)
   + Middleware
      + morgan: npm i morgan --save-dev: In ra các log khi người dùng chạy 1 request.
        + dev, combined, common, short, tiny: Đây là các trạng thái của morgan, tùy theo mục đích sử dụng.
          
      + helmet: npm i helmet --save-dev: Bảo mật trang web thông tin riêng tư ở các phần header.
        
      + compression: npm i compression --save-dev: Giảm lưu lượng data trả về từ server.
    
3. Tạo 1 folder là dbs trong folder src
   + Database:
      + Sử dụng singleton pattern để connect với database.
      + Kiểm tra số người connect đến database, bằng cách viết 1 function trong helper folder.
      + Thông báo khi server quá tải.
      + Sử dụng poolSize trong hệ thống: poolSize là tái sử dụng kết nối được duy trì bởi database, cải thiện hiệu suất, giảm chi phí.
