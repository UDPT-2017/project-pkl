# Project - *Webstite Phương Trang*

**Trang Thông Tin Phương Trang** là repository cho đồ án nhóm. Nhóm tối đa 4 thành viên.

Thành viên:
* [x] **1412274** - Nguyễn Hoàng Kim -1412274-NHKim- email - 30%
* [x] **1412278** - Phan Khánh Lâm - lam0196vn- lam0196vn@gmail.com - 30%
* [x] **1412414** - Vương Thiên Phú - 1412414 - thienphuvuong@gmail.com - 40%


URL: **https://projectpkl.herokuapp.com/**

Báo cáo: **https://udpt-2017.github.io/project-pkl/**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [x] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Thể hiện thông tin của website của công ty , cho phép khách hàng đăng kí, đăng nhập vào hệ thống, xem các thông tin của công ty, tin tức của công ty. Xem thông tin vé đã đặt. Xem thông tin khách hàng sau khi đăng nhập.

## Lập trình server
### MVC
* [x] MVC (1412414,1412278,1412274)
* [x] Config (1412414,1412274)
* [ ] REST routing (MSSV1)
* [x] Layout & partial (1412414)

### Lập trình dữ liệu
* [x] Thêm (1412414)
* [ ] Xóa (MSSV1)
* [x] Sửa (1412414)
* [x] Tìm kiếm (1412278,1412274,1412414)

### Xử lý lỗi
* [ ] Xử lý lỗi trong cùng trang web (MSSV1)
* [ ] Xử lý lỗi dùng trang web riêng (MSSV1)
   * [ ] 401 (MSSV1)
   * [ ] 404 (MSSV1)
   * [ ] 500 (MSSV1)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [ ] Facebook API: mô tả (MSSV1)
* [x] Google API:sử dụng API google map để thể hiện vị trí trong trang liên hệ (1412278)
* [ ] ...

## Lập trình client
* [x] Kiểm tra dữ liệu (1412414)
* [x] Animation (MSSV1)
* [x] Thao tác DOM (1412414)
* [x] AJAX (1412274,1412278,1412414)

## Bảo mật
* [x] Chứng thực (1412414)
* [ ] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (MSSV1)
   * [ ] Không cho phép thao tác vào trang web khi không có quyền (MSSV1)
   * [ ] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (MSSV1)
   * [ ] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (MSSV1)

## Nâng cao
* [ ] ...

## Chức năng đã thực hiện
Các **yêu cầu chức năng** (check và ghi MSSV vào các phần chức năng đã thực hiện)
* [x] Đăng kí tài khoản mới.Hash password thông qua passport trước khi ghi xuống DB (1412414)
* [x] Thiết kế trang chủ , navbar (1412414)
* [x] Quản lý thư viện gallery, có sử dụng ajax để thể hiện các album ảnh khi chọn 1 thumbnail ảnh bất kì (1412414)
* [x] Xem thông tin khách hàng, sử dụng AJAX  sửa thông tin khách hàng  (1412414)
* [x] Thiết kế trang thông tin liên hệ, thể hiện vị trí của công ty thông qua google api (1412278)
* [x] Thiết kế trang tin tức, sử dụng AJAX để chuyển sang trang tin tức cụ thể, thể hiện các comment có trong bài đăng. (1412278)
* [x] Xem thông tin vé đã đặt (1412274)
* [x] Deploy trang web lên heroku (1412414)
* [x]


## Demo

Link ảnh GIF demo ứng dụng:
* Demo trang thông tin liên hệ khi chưa đăng nhập (1412278)
![Video Walkthrough](https://github.com/UDPT-2017/project-pkl/blob/master/demo/1412278_About_khongdangnhap.gif)
* Demo trang thông tin liên hệ khi đã đăng nhập (1412278)
![Video Walkthrough](https://github.com/UDPT-2017/project-pkl/blob/master/demo/1412278_About_codangnhap.gif)
* Demo trang tin tức khi chưa đăng nhập (1412278)
![Video Walkthrough](https://github.com/UDPT-2017/project-pkl/blob/Lam_TinTuc/demo/1412278_tintuc_khongdangnhap.gif)

* Demo trang tin tức sau khi đăng nhập (1412278)
![Video Walkthrough](https://github.com/UDPT-2017/project-pkl/blob/Lam_TinTuc/demo/1412278_tintuc_codangnhap.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
