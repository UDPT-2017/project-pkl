--Tạo bảng KHUYENMAI
create table KHUYENMAI
(
	MaKhuyenMai varchar(10) primary key,
	TenKhuyenMai varchar(50),
	NgayBatDau date,
	NgayKetThuc date,
	HinhThucKhuyenMai varchar(50),
	TyLeGiamGia integer,
	MoTaKhuyenMai text,
	AnhKhuyenMai varchar(100)
)

--Tạo bảng tin tức
create table TINTUC
(
	MaTinTuc serial primary key,
	TieuDeTinTuc text,
	NgayDangTinTuc date,
	NoiDungTomTat text,
	NoiDungTinTuc text,
	SoLuocLike integer,
	AnhDaiDienTinTuc varchar(100)
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

--Tạo bảng địa điểm
create table DiaDiem
(
	MaDiaDiem serial primary key,
	TenDiaDiem varchar(100),
	AnhDiaDiem varchar(100)
)

--Tạo bảng gallery chứa các hình ảnh
create table GALLERY
(
	MaHinhAnh serial primary key,
	LinkHA varchar(100),
	DiaDiem varchar(200),
	MoTa text,
	MaDiaDiem integer references DIADIEM(MaDiaDiem)
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
values('TK001',0,N'Thành viên',0,'thanhphi_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH001','/images/PKL.jpg');
insert into TAIKHOAN
values('TK002',600,N'VIP',10000000,'hoangkim_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH002','/images/PKL2.jpg');

insert into TAIKHOAN
values('TK003',700,N'VIP',10000000,'khanhlam_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH003','/images/NHK.jpg');

insert into TAIKHOAN
values('TK004',900,N'Khách hàng thân thiết',20000000,'thienphu_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH004','/images/female_avartar.png');

insert into TAIKHOAN
values('TK005',800,N'Khách hàng thân thiết',5000000,'vietanh_hqtpkl','$2a$10$SOcu7UmX5ZbJDBVPd02QPOrZ2LS9GOGzKkxPF5SHeb/25PGMtxOva','KH005','/images/male_avartar.png');

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
values('MKM001',N'Khuyến Mãi Sinh Nhật Phương Trang','2017-06-01','2017-06-20',N'Giảm giá',10, 'Sinh nhật lần thứ 20 của Phương Trang', 'images/khuyenmai/khuyenmai1.jpg');
insert into KHUYENMAI
values('MKM002',N'Khuyến Mãi Tết','2017-06-01','2017-06-20',N'Giảm giá',10, 'Khuyến mãi dịp tết năm nay 2017', 'images/khuyenmai/khuyenmai2.jpg');
insert into KHUYENMAI
values('MKM003',N'Khuyến Mãi Giáng sinh','2017-06-01','2017-06-20',N'Giảm giá',10, 'Vui mừng giáng sinh năm nay, Phương trang khuyến mãi cho khách hàng', 'images/khuyenmai/khuyenmai3.jpg');
insert into KHUYENMAI
values('MKM004',N'Khuyến Mãi ngày của mẹ','2017-06-01','2017-06-20',N'Giảm giá',10, 'Nhân dịp ngày của mẹ, Phương Trang xin khuyến mãi cho khách hàng', 'images/khuyenmai/khuyenmai4.jpg');
insert into KHUYENMAI
values('MKM005',N'Khuyến Mãi Halloween','2017-06-01','2017-06-20',N'Giảm giá',10, 'Cùng hù dọa nhau cùng với Phương Trang trong dịp lễ Halloween năm nay', 'images/khuyenmai/khuyenmai5.jpg');
insert into KHUYENMAI
values('MKM006',N'Khuyến Mãi happy new year','2017-06-01','2017-06-20',N'Giảm giá',10, 'Vui mừng Tết tây năm nay Phương trang khuyến mãi cho khách hàng', 'images/khuyenmai/khuyenmai6.jpg');
insert into KHUYENMAI
values('MKM007',N'Khuyến Mãi ngày của cha','2017-06-01','2017-06-20',N'Giảm giá',10, 'Nhân dịp ngày của cha, Phương Trang xin khuyến mãi cho khách hàng', 'images/khuyenmai/khuyenmai7.jpg');
insert into KHUYENMAI
values('MKM008',N'Khuyến Mãi Valentine Day','2017-06-01','2017-06-20',N'Giảm giá',10, 'Chúc các cặp đôi mãi mãi hạnh phúc', 'images/khuyenmai/khuyenmai8.jpg');


--================================================================================
insert into KHUYENMAI_VE
values('MKM001','VE004');


insert into KHUYENMAI_VE
values('MKM001','VE001');

--==============================================================================
insert into DIADIEM (TenDiaDiem, AnhDiaDiem) values('Thành phố hồ chí minh', 'ligerrat/images/demo/gallery/hochiminh1.jpg');
insert into DIADIEM (TenDiaDiem, AnhDiaDiem) values('Hà Nội', 'ligerrat/images/demo/gallery/hanoi1.jpg');
insert into DIADIEM (TenDiaDiem, AnhDiaDiem) values('Đà Nẵng', 'ligerrat/images/demo/gallery/danang1.jpg');
insert into DIADIEM (TenDiaDiem, AnhDiaDiem) values('Đà Lạt', 'ligerrat/images/demo/gallery/dalat1.jpg');

--==============================================================================
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh1.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh2.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh3.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh4.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh5.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hochiminh6.jpg', 'Thành phố hồ chí minh', ' Là thành phố hiện đại bậc nhất Việt Nam', 1);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi1.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi2.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi3.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi4.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi5.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/hanoi6.jpg', 'Hà Nội', 'Là thủ đô, trái tim của Việt Nam', 2);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang1.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang2.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang3.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang4.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang5.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/danang6.jpg', 'Đà Nẵng', 'Là thành phố du lịch nổi tiếng nhất Việt Nam', 3);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat1.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat2.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat3.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat4.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat5.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);
insert into gallery (LinkHA, DiaDiem, MoTa, MaDiaDiem) values('ligerrat/images/demo/gallery/dalat6.jpg', 'Đà Lạt', 'Là một địa điểm du lịch tuyệt đẹp với nhiều kiến trúc cổ và hoa', 4);

--===============================================================================================
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang được nhà nước ban tạng giải thưởng vàng', '2017-06-10', 'Phương Trang được nhà nước ban tạng giải thưởng vàng.Toàn thể công ty hân hoan cảm ơn sự ủng hộ của các quý khách hàng đã luôn tin tưởng và tin dùng dịch vụ của Phương Trang. ', 'Phương Trang được nhà nước ban tạng giải thưởng vàng',  50, 'images/tintuc/tintuc6.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang mở thêm nhiều chuyến đường', '2017-06-12', 'Phương Trang mở thêm nhiều chuyến đường', 'Phương Trang mở thêm nhiều chuyến đường xuyên Việt. Nhằm phục vụ nhu cầu của quý khach hàng, công ty Phương Trang mở thêm các tuyến đường đi miền Trung và Tây Bắc. Với phương châm là phục vụ khách hàng hết mình, vì khách hàng mà phục vụ.',  20, 'images/tintuc/tintuc3.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang tổ chức sinh nhật lần thứ 20', '2017-06-14', 'Phương Trang tổ chức sinh nhật lần thứ 20', 'Phương Trang tổ chức sinh nhật lần thứ 20. Phương Trang chân thành cảm ơn quý khách hàng đã tin tưởng và đồng hành cùng công ty trong suốt những năm vừa qua. Phương Trang cam kết cung cấp các dịch vụ tốt nhất cho khách hàng',  50, 'images/tintuc/tintuc2.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang tặng phần thưởng cho học sinh nghèo', '2017-06-17', 'Phương Trang tặng phần thưởng cho học sinh nghèo', 'Phương Trang tặng phần thưởng cho học sinh nghèo. Nhân dịp năm học mới, Phương Trang vô cùng hân hạnh trao trặng 500 suất học bổng cho các học sinh nghèo vượt khó trong thành phố Hồ Chí Minh nhằm giúp đỡ các em một phần chi phí cho năm học mới.',  50, 'images/tintuc/tintuc5.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang chiến thắng giải thưởng xe vàng', '2017-06-20', 'Phương Trang chiến thắng giải thưởng xe vàng', 'Phương Trang chiến thắng giải thưởng xe vàng. Cảm ơn quý khách đã luôn tín dụng và ủng hộ Phương Trang, Phương Trang cam kết cung cấp dịch vụ tốt nhất, vì trải nghiệm của khách hàng ',  50, 'images/tintuc/tintuc6.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang tăng lợi nhuận trong năm nay', '2017-06-21', 'Phương Trang tăng lợi nhuận trong năm nay', 'Phương Trang tăng lợi nhuận trong năm nay. Trong 3 tháng đầu năm, lợi nhuận của công ty tăng hơn 15% so với cùng kì năm ngoái. Phương Trang vô cùng cảm ơn quý khách đã tin chọn dịch vụ của chúng tôi',  50, 'images/tintuc/tintuc3.png');
insert into TINTUC(TieuDeTinTuc,NgayDangTinTuc, NoiDungTomTat, NoiDungTinTuc, SoLuocLike, AnhDaiDienTinTuc) values('Phương Trang mua thêm nhiều xe khách mới', '2017-06-25', 'Phương Trang mua thêm nhiều xe khách mới', 'Phương Trang mua thêm nhiều xe khách mới. Nhằm nâng cao dịch vụ của hãng, Phương Trang vừa tăng cường thêm 500 xe 50 chỗ thế hệ mới nhằm phục vụ quý khách tốt hơn.',  50, 'images/tintuc/tintuc1.png');
---===================================================================================================
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (1,'Chuc Mung Phuong Trang, mong Phuong Trang cang phat trien',1,'TK001');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (1,'Chuc Mung Phuong Trang',1,'TK002');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (1,'Xin chuc mung cong ty',1,'TK003');

insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (2,'Chuc Mung Phuong Trang, mong Phuong Trang cang phat trien',1,'TK002');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (2,'Chuc mung phuong trang mo them nhieu tuyen duong',1,'TK001');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (2,' Mung Phuong Trang phat trien manh hon',1,'TK003');


insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (3,'Chuc Mung Phuong Trang, mong Phuong Trang cang phat trien',1,'TK004');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (3,'Chuc Mung Phuong Trang, mong Phuong Trang cang phat trien tot hon',1,'TK001');
insert into TINTUC_COMMENTS(MaTinTuc,NoiDungComment,SoLuocLike,MaTaiKhoan ) values (3,'Chuc Mung Phuong Trang, mong Phuong Trang cang phat trien',1,'TK002');
select * from TINTUC
select * from TINTUC_COMMENTS where MaTinTuc = 1;
select NoiDungComment  from TINTUC_COMMENTS where MaTinTuc = 1;
select NoiDungComment from TINTUC_COMMENTS where MaTinTuc = 1 and TINTUC_COMMENTS.MaTaiKhoan like TAIKHOAN.MaTaiKhoan;
