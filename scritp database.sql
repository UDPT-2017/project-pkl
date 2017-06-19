--Tạo bảng KHUYENMAI
create table KHUYENMAI
(
	MaKhuyenMai varchar(10) primary key,
	TenKhuyenMai varchar(50),
	NgayBatDau date,
	NgayKetThuc date,
	HinhThucKhuyenMai varchar(50),
	TyLeGiamGia integer,
	MoTaKhuyenMai text
)

--Tạo bảng tin tức
create table TINTUC
(
	MaTinTuc serial primary key,
	TieuDeTinTuc varchar(100),
	NgayDangTinTuc timestamp,
	NoiDungTomTat text,
	NoiDungTinTuc text,
	SoLuocLike integer
)

--Các comments của tin tức
create table TINTUC_COMMENTS
(
	MaComment serial primary key,
	MaTinTuc integer	references TINTUC(MaTinTuc),
	NoiDungComment text,
	NgayDangComment timestamp,
	SoLuocLike integer,
	MaTaiKhoan varchar(10)
)

--Tạo bảng gallery chứa các hình ảnh
create table GALLERY
(
	LinkHA varchar(30) primary key,
	DiaDiem varchar(50),
	MoTa varchar(100)
)

--Tạo bảng PHUONGTHUCTHANHTOAN
create table PHUONGTHUCTHANHTOAN
(
	MaPhuongThucThanhToan varchar(10) primary key,
	TenPhuongThucThanhToan varchar(50)
)
--Tạo bảng KHACHHANG
create table KHACHHANG
(
	MaKhachHang varchar(10) primary key,
	TenKhachHang varchar(50),
	GioiTinhKH varchar(50),
	DiaChiKH varchar(50),
	SoCMNDKH varchar(9),
	DienthoaiKH varchar(20)
)

--Tạo bảng TAIKHOAN
create table TAIKHOAN
(
	MaTaiKhoan varchar(10) primary key,
	DiemTichLuy integer,
	LoaiTaiKhoan varchar(50),
	SoTien integer,
	TenDangNhap varchar(50) unique not null,
	MatKhau varchar(100),
	MaKhachHang varchar(10) references KHACHHANG(MaKhachHang),
	Avartar varchar(50)
)

--Tạo bảng LOAINHANVIEN
create table LOAINHANVIEN
(
	MaLoaiNV varchar(10) primary key,
	TenLoaiNV varchar(50)
)

--Tạo bảng NHANVIEN
create table NHANVIEN
(
	MaNhanVien varchar(10) primary key,
	TenNhanVien varchar(50),
	GioiTinhNV varchar(50),
	DiaChiNV varchar(50),
	SoCMNDNV varchar(9),
	NgaySinhNV date,
	DienthoaiNV varchar(20),
	TenDangNhapNV varchar(50) unique not null,
	MatKhauNV varchar(100) not null,
	LoaiNhanVien varchar(10) references LOAINHANVIEN(MaLoaiNV),
	Luong integer,
	BangLai varchar(50),
	KhaNangLaiDuongDai integer
)

--Tạo bảng XE
create table XE
(
	MaXe varchar(10) primary key,
	LoaiXe varchar(50),
	BienSoXe varchar(50) unique,
	SoLuongGhe integer
)

--Tạo bảng GHE
create table GHE
(
	ViTriGhe varchar(10) not null,
	MaXe varchar(10) references XE(MaXe) not null,
	primary key (ViTriGhe, MaXe)
)

--Tạo bảng TUYENDUONG
create table TUYENDUONG
(
	MaTuyenDuong varchar(10) primary key,
	NoiXuatPhat varchar(50),
	NoiDen varchar(50),
	BenDi varchar(50),
	BenDen varchar(50),
	QuangDuong integer
)

--Tạo bảng CHUYENDI
create table CHUYENDI
(
	MaChuyenDi varchar(10) primary key,
	TuyenDuong varchar(10) references TUYENDUONG(MaTuyenDuong),
	NgayGioXuatPhat date,
	NgayGioDen date,
	GiaDuKien integer,
	Xe varchar(10) references XE(MaXe)
)

--Tạo bảng VE

create table VE
(
	MaVe varchar(10) primary key,
	GiaVeThuc integer,
	TrangThaiVe integer,
	TrangThaiThanhToan integer,
	MaKhachHang varchar(10) references KHACHHANG(MaKhachHang),
	PhuongThucThanhToan varchar(10) references PHUONGTHUCTHANHTOAN(MaPhuongThucThanhToan),
	NgayThanhToan date,
	NgayDatVe date,
	NhanVienDatVe varchar(10) references NHANVIEN(MaNhanVien),
	MaGhe varchar(10) not null,
	MaXe varchar(10) not null,
	MaChuyenDi varchar(10) references CHUYENDI(MaChuyenDi),
	NhanVienThanhToan varchar(10) references NHANVIEN(MaNhanVien),
    foreign key( MaGhe,MaXe) references GHE(ViTriGhe,MaXe)
)

--Tạo bảng KHUYENMAI_VE
create table KHUYENMAI_VE
(
	MaKhuyenMai varchar(10) references KHUYENMAI(MaKhuyenMai),
	MaVe varchar(10) references VE(MaVe)
)

--Tạo bảng PHANCONGTAIXELAICHUYENDI
create table PHANCONGTAIXELAICHUYENDI
(
	MaChuyenDi varchar(10) references CHUYENDI(MaChuyenDi),
	TaiXe varchar(10) references NHANVIEN(MaNhanVien),
	LoaiTaiXe varchar(50),
	primary key (MaChuyenDi, TaiXe)
)

--Tạo bảng PHANCONGTAIXELAIXE
create table PHANCONGTAIXEPHUTRACHXE
(
	TaiXe varchar(10) references NHANVIEN(MaNhanVien),
	MaXe varchar(10) references XE(MaXe),
	NgayBatDau date,
	NgayKetThuc date,
	primary key (MaXe, TaiXe,NgayBatDau,NgayKetThuc)
)

--================================================================================
insert into XE
values('XE001',N'Giường Nằm','59B-72622',40);

insert into XE
values('XE002',N'Giường Nằm','59B-09332',40);
--================================================================================

insert into TUYENDUONG
values('TD001',N'TP Hồ Chí Minh',N'Phú Yên',N'Bến Xe Miền Đông',N'Bến Xe Phú Lâm',500);

insert into TUYENDUONG
values('TD002',N'TP Hồ Chí Minh',N'Phú Yên',N'Cầu Vượt Sóng Thần',N'Tạp Hóa Lệ Quang-Hòa Phong',520);
--================================================================================

insert into LoaiNhanVien
values('LNV001',N'Tài Xế');
insert into LoaiNhanVien
values('LNV002',N'Nhân Viên Quản Lý');
insert into LoaiNhanVien
values('LNV003',N'Nhân Viên Đặt Vé');
insert into LoaiNhanVien
values('LNV004',N'Nhân Viên Thanh Toán');

--================================================================================
insert into NhanVien
values('NV001',N'Nguyễn Thanh Phi',N'Nam',N'Tây Hòa-Phú Yên','221425270','1996-01-04','01265190526','thanhphi1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV002',10000000,NULL,0);

--mật khẩu hash hqt2014-PKL@*
insert into NhanVien
values('NV002',N'Nguyễn Hoàng Kim',N'Nam',N'TP Hồ Chí Minh','226166441','1996-10-01','01227374411','nguyenhoangkim1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV001',20000000,'B2',500);

insert into NhanVien
values('NV003',N'Phan Khánh Lâm',N'Nam',N'TP Hồ Chí Minh','224515576','1996-10-02','01234451122','khanhlam1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV001',18000000,'B2',400);

insert into NhanVien
values('NV004',N'Vương Thiên Phú',N'Nam',N'TP Hồ Chí Minh','226514411','1996-10-03','0987661444','thienphu1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV003',10000000,NULL,0);

insert into NhanVien
values('NV005',N'Ngô Việt Anh',N'Nam',N'TP Hồ Chí Minh','226515614','1996-10-04','0987665222','vietanh1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV001',20000000,NULL,200);

insert into NhanVien
values('NV006',N'Lương Công Vĩ',N'Nam',N'Phú Yên','221441155','1991-10-04','0988776111','congvi1996','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','LNV004',10000000,NULL,0);


--================================================================================

insert into ChuyenDi
values('CD001','TD001','2017-06-06 17:00','2017-06-07 05:00',220000,'XE001');
insert into ChuyenDi
values('CD002','TD002','2017-06-06 17:00','2017-06-07 05:00',220000,'XE002');
insert into ChuyenDi
values('CD003','TD001','2017-06-07 17:00','2017-06-08 05:00',220000,'XE001');

--================================================================================
insert into PHANCONGTAIXEPHUTRACHXE
values('NV002','XE001','2017-06-06','2017-07-06');

insert into PHANCONGTAIXEPHUTRACHXE
values('NV003','XE002','2017-06-06','2017-07-06');

--================================================================================
insert into GHE
values('A1','XE001');
insert into GHE
values('A10','XE001');
insert into GHE
values('B1','XE001');
insert into GHE
values('B10','XE001');

insert into GHE
values('A1','XE002');
insert into GHE
values('A10','XE002');
insert into GHE
values('B1','XE002');
insert into GHE
values('B10','XE002');
--================================================================================

insert into PHANCONGTAIXELAICHUYENDI
values('CD001','NV002',N'Tài xế bình thường');

insert into PHANCONGTAIXELAICHUYENDI
values('CD001','NV003',N'Tài xế bình thường');

insert into PHANCONGTAIXELAICHUYENDI
values('CD003','NV003',N'Tài xế bình thường');

--================================================================================
insert into PHUONGTHUCTHANHTOAN
values('PTTT001',N'Internet Banking');

insert into PHUONGTHUCTHANHTOAN
values('PTTT002',N'Tiền Mặt');

insert into PHUONGTHUCTHANHTOAN
values('PTTT003',N'Thẻ Tín Dụng');

insert into PHUONGTHUCTHANHTOAN
values('PTTT004',N'Chuyển Khoản Ngân Hàng Trực Tiếp');

insert into PHUONGTHUCTHANHTOAN
values('PTTT005',N'Tài khoản phương trang');

--================================================================================

insert into KHACHHANG
values('KH001',N'Nguyễn Thanh Phi',N'Nam',N'Phú Yên','221425270','01265190526');

insert into KHACHHANG
values('KH002',N'Nguyễn Hoàng Kim',N'Nam',N'TP Hồ Chí Minh','226517711','0987111333');

insert into KHACHHANG
values('KH003',N'Phan Khánh Lâm',N'Nam',N'TP Hồ Chí Minh','117721134','01267114411');

insert into KHACHHANG
values('KH004',N'Vương Thiên Phú',N'Nam',N'TP Hồ Chí Minh','227614411','0988772134');

insert into KHACHHANG
values('KH005',N'Ngô Việt Anh',N'Nam',N'TP Hồ Chí Minh','988222455','0908333113');


--mật khẩu hash hqt2014-PKL@*
--================================================================================
insert into TAIKHOAN
values('TK001',0,N'Thành viên',0,'thanhphi_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH001')
insert into TAIKHOAN
values('TK002',600,N'VIP',10000000,'hoangkim_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH002')

insert into TAIKHOAN
values('TK003',700,N'VIP',10000000,'khanhlam_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH003')

insert into TAIKHOAN
values('TK004',900,N'Khách hàng thân thiết',20000000,'thienphu_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH004')

insert into TAIKHOAN
values('TK005',800,N'Khách hàng thân thiết',5000000,'vietanh_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH005')

--================================================================================
insert into VE
values('VE001',200000,1,1,'KH001','PTTT001','2017-06-06','2017-06-06','NV004','A1','XE001','CD001','NV006');

insert into VE
values('VE002',200000,1,0,'KH002',NULL,NULL,'2017-06-06','NV004','A10','XE001','CD001',NULL);

insert into VE
values('VE003',200000,1,1,'KH003','PTTT002','2017-06-06','2017-06-06','NV004','B1','XE002','CD001','NV006');

insert into VE
values('VE004',200000,0,0,'KH004',NULL,NULL,'2017-06-07',NULL,'A1','XE002','CD002',NULL);

--================================================================================
insert into KHUYENMAI
values('MKM001',N'Khuyến Mãi Sinh Nhật Phương Trang','2017-06-01','2017-06-20',N'Giảm giá',10);


--================================================================================
insert into KHUYENMAI_VE
values('MKM001','VE004');


insert into KHUYENMAI_VE
values('MKM001','VE001');
