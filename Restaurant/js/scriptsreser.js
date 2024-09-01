document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('reservation-form').addEventListener('submit', function(event) {
        // Ngăn gửi biểu mẫu để kiểm tra
        event.preventDefault();

        // Lấy giá trị từ các trường
        let name = document.getElementById('name').value;
        let email = document.getElementById('email').value;
        let phone = document.getElementById('phone').value;
        let date = document.getElementById('date').value;
        let time = document.getElementById('time').value;
        let people = document.getElementById('people').value;
        let notes = document.getElementById('notes').value;

        // Kiểm tra các trường yêu cầu
        if (name === '' || email === '' || phone === '' || date === '' || time === '' || people === '') {
            document.getElementById('confirmation-message').innerHTML = '<p style="color: red;">Vui lòng điền đầy đủ thông tin.</p>';
            document.getElementById('confirmation-message').style.display = 'block';
            // Cuộn đến phần thông báo lỗi
            document.getElementById('confirmation-message').scrollIntoView({ behavior: 'smooth' });
        } else {
            // Tạo thông báo xác nhận
            let confirmationMessage = `
                <p><strong>Thông tin đặt bàn:</strong></p>
                <p>Họ và Tên: ${name}</p>
                <p>Email: ${email}</p>
                <p>Số Điện Thoại: ${phone}</p>
                <p>Ngày Đặt: ${date}</p>
                <p>Giờ Đặt: ${time}</p>
                <p>Số Người: ${people}</p>
                <p>Yêu Cầu Đặc Biệt: ${notes}</p>
                <p>Bạn có chắc chắn muốn đặt bàn này?</p>
                <button id="confirm-button">Xác Nhận</button>
                <button id="cancel-button">Hủy</button>
            `;
            
            let confirmationDiv = document.getElementById('confirmation-message');
            confirmationDiv.innerHTML = confirmationMessage;
            confirmationDiv.style.display = 'block';

            // Cuộn đến phần thông báo xác nhận
            confirmationDiv.scrollIntoView({ behavior: 'smooth' });

            // Xử lý xác nhận
            document.getElementById('confirm-button').addEventListener('click', function() {
                // Hiển thị thông báo thành công và ẩn thông báo xác nhận
                confirmationDiv.innerHTML = '<p>Chúc mừng bạn đã đặt bàn thành công!</p>';
                // Xóa thông tin trong các trường input
                document.getElementById('reservation-form').reset();
                // Có thể gửi dữ liệu đến server ở đây
            });

            // Xử lý hủy bỏ
            document.getElementById('cancel-button').addEventListener('click', function() {
                confirmationDiv.style.display = 'none';
            });
        }
    });
});
