-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 03, 2023 lúc 04:30 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecommerce`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `cart`
--

CREATE TABLE `cart` (
  `id` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `quantity` int(11) NOT NULL,
  `product_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `cart`
--

INSERT INTO `cart` (`id`, `created_date`, `quantity`, `product_id`, `user_id`) VALUES
(16, '2022-11-09 17:14:51', 1, 1, 9),
(18, '2022-11-09 21:40:30', 1, 2, 9),
(19, '2022-11-09 21:40:35', 1, 6, 9),
(21, '2022-11-09 22:54:46', 1, 1, 9),
(27, '2022-11-13 21:30:37', 5, 4, 30),
(28, '2022-11-13 21:31:34', 5, 8, 30),
(29, '2022-11-13 21:32:04', 5, 1, 32),
(30, '2022-11-13 21:32:08', 8, 2, 32),
(31, '1970-01-01 00:00:00', 2, 1, 37),
(32, '2023-04-11 21:35:37', 2, 1, 37);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `category_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `categories`
--

INSERT INTO `categories` (`id`, `category_name`, `description`, `image_url`) VALUES
(23, '3CE', '123', '456'),
(24, 'Black Rouge', '123', '456'),
(25, 'Maybelline', '123', '456'),
(26, 'Gilaa', '123', '456'),
(27, 'Lemonade', '123', '456'),
(28, 'BBIA', '123', '456'),
(29, 'MAC', '123', '456');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `imageURL` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `category_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `description`, `imageURL`, `name`, `price`, `category_id`) VALUES
(1, 'Son kem BBIA Last Velvet Lip Tint với chất son đậm, bám chặt như nam châm. Chỉ cần thoa 1 lớp là màu sẽ lên rõ và sống động Các phân tử nhỏ liên kết chặt chẽ như phấn giúp che đi những khuyết điểm cho bờ môi tươi tắn và khỏe mạnh. Độ bám màu khủng, không ', 'https://product.hstatic.net/200000551679/product/bbia-last-velvet-lip-tint-15_da72807ad1364b5aa9c9a815cc13bc6e_1024x1024.jpg', 'BBIA Son kem Last Velvet Lip Tint', 128000, 28),
(2, 'Đây là một trong những màu son đình đám, được nhiều chị em yêu thích và lựa chọn trong thời gian qua. Sản phẩm này có tông màu đỏ cam thuần với tỷ lệ giữa đỏ và cam khá cân bằng. Son lên môi khá nhẹ nhàng, không quá chói hay tươi nên rất phù hợp để chị em', 'https://www.boshop.vn/uploads/2023/02/22/63f5de156ecd1-son-kem-bbia-last-velvet-tint-v11-calm-boss-boshop.jpg', 'Son Kem Bbia Last Velvet Tint #V11 Calm Boss', 149000, 28),
(3, 'Đây cũng là màu sơn rất được lòng chị em phụ nữ hiện nay. Sản phẩm này có chất son kem mềm mượt với độ xốp sệt rất vừa phải. Son có khả năng che phủ tốt, lên màu chuẩn. Son khi lên môi hoàn toàn không bị vón cục mà ngược lại còn tạo độ bóng nhẹ.', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-4.jpg', 'Son Kem Lì Bbia Last Velvet Lip Tint Version 3 - 12 Sweet Boss (Màu cam cháy)', 290000, 28),
(4, 'Nếu nói về những màu son đẹp nhất, hot nhất của BBIA thì chắc chắn không thể bỏ qua màu số 14 Chill Boss này. Sản phẩm được trung hòa giữ sắc đỏ cùng chút xíu gạch, rất phù hợp để các bạn nữ đánh full màu. Màu son này cũng không hề kén da hay men răng, ng', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-5.jpg', 'Son BBIA Boss Series – Version 3 màu Chill Boss (đỏ gạch)', 290000, 28),
(5, 'Thỏi son BBIA Note Series – Version 5 này có chất son xốp đặc nhưng lại rất dễ tán đều trên môi. Son có lớp tint bám màu khá chắc với mùi trái cây và mùi hương liệu khá nồng.', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-66.jpg', 'Son BBIA Note Series – Version 5 màu 23 Romantic Note (màu cam đất)', 175000, 28),
(6, 'Với màu đỏ đất, làn da và hàm răng của bạn sẽ được tôn lên. Do đó, sản phẩm này không hề kén da hay răng và cũng không đòi hỏi người dùng phải makeup cầu kỳ kèm theo.Tương tự như các dòng son BBIA khác, thỏi son Trendy Note này cũng có chất son đặc, xốp v', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-7.jpg', 'Son BBIA Note Series – Version 5 màu 24 Trendy Note (đỏ đất)', 199000, 28),
(7, 'Màu Final Note cũng là một trong những thỏi son hot nhất hiện nay của nhà BBIA. Sản phẩm này có sắc đỏ nâu trầm rất hút mắt người dùng. Son siêu dễ dùng, giúp tôn da và tạo hiệu ứng trắng răng hiệu quả. Với thỏi son này, bạn cũng không cần phải makeup mà ', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-8.jpg', 'Son BBIA Note Series – Version 5 màu 25 Final Note (đỏ nâu đất)', 199000, 28),
(8, 'Son BBIA màu 35 Feign Joy cũng là một trong những màu son rất được lòng chị em phụ nữ hiện nay. Sản phẩm này có chất son được làm từ những nguyên liệu cao cấp với khả năng dưỡng ẩm cao, mang tới cho bạn đôi môi mềm mượt và căng mọng.', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-9.jpg', 'Son BBIA  Feeling Series – Series 8 màu 35 Feign Joy (cam đất nude)', 129000, 28),
(9, 'Thỏi son này có chất son xốp mịn và rất dễ tán trên môi. Son lúc đầu hơi bóng nhẹ nhưng chỉ mất 30 giây là son đã lì trở lại. Thỏi son này có khả năng dưỡng ẩm cao, mang đến cho bạn đôi môi ẩm mượt, mềm mướt vô cùng. Khả năng bám màu của son cũng khá tốt,', 'https://phongreviews.com/wp-content/uploads/2021/06/son-bbia-10.jpg', 'Son BBIA Red Scandal – Series 7 màu 32 Grand Scandal (đỏ cam)', 150000, 28),
(10, 'Son BBIA 36 là màu thứ ba trong bộ sưu tập Last Velvet Tint Version 8 có tên là Feign Cool. Khác với màu son hồng truyền thống mà mọi người thường nghĩ, BBIA màu 36 là một sắc hồng nâu độc đáo. Màu nâu beige được pha trộn rõ rệt tạo nên một tổng thể thời ', 'https://cdn.chanhtuoi.com/uploads/2023/01/son-bbia-mau-36-1.jpg.webp', 'Son BBIA - Last Velvet Tint Version 8-Màu 36', 199000, 28),
(11, 'Son thỏi siêu lì Retro Matte Lipstick là một trong những dòng son môi mang tính biểu tượng đã làm nên tên tuổi của M·A·C. Nổi tiếng với chất son siêu lì, che khuyết điểm rãnh môi và khả năng lên màu cực chuẩn, Retro Matte mang đến phong cách đậm chất cá t', 'https://media.hasaki.vn/catalog/product/t/o/top_fb_ads_100550094-1677664662_img_358x358_843626_fit_center.jpg', 'Son Thỏi MAC Siêu Lì 707 Ruby Woo - Đỏ Cổ Điển 3g Retro Matte Lipstick', 650000, 29),
(12, 'Son môi MAC Matte Lipstick 3g thuộc dòng \"Matte\" - Lì là một trong những dòng son mang tính biểu tượng đã làm nên tên tuổi của M·A·C bên cạnh dòng Retro Matte trứ danh. Công thức son dạng kem đậm đặc cho độ lên màu cao với một bề mặt lì không bóng.', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_100550531-1679559093_img_358x358_843626_fit_center.jpg', 'Son Thỏi MAC Mịn Lì 602 Chili - Đỏ Gạch 3g\r\nMatte Lipstick', 650000, 29),
(15, 'Son Mac Tropic Tonic mang đầy đủ tính chất quyến rũ của một thỏi son Mac. Mang màu sắc cam hồng hợp xu thế thuộc dòng Matte, là dòng son lì khó phai, không gây khô môi, chất son mượt mà. Còn gì tuyệt vời hơn khi lướt thỏi son nhẹ nhàng, mềm mại trên cánh ', 'https://sonmac.vn/wp-content/uploads/2016/07/Son-Mac-Tropic-Tonic-4.jpg', 'Son Mac Tropic Tonic', 450000, 29),
(16, '\"Nhẹ như áng mây, mềm mại và mịn màng\" chính là Son Kem Lì 3CE Cloud Lip Tint đến từ thương hiệu 3CE của Hàn Quốc. Cây son vuông dài và đầu nắp ánh kim sang trọng luôn là sự lựa chọn hàng đầu bởi sức hấp dẫn khó cưỡng từ chất liệu đến thiết kế. Chất son k', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206311-1679559793_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 3CE Mịn Nhẹ Live A Little - Đỏ Đất 4g\r\nCloud Lip Tint', 272000, 23),
(17, 'Son Kem Lì 3CE Velvet Lip Tint 4g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, có chất kem mềm mịn tựa như mousse, và là sự kết hợp độc đáo giữa son kem lì và son tint nên chất son vô cùng mỏng nhẹ, không hề gây cảm giác nặng môi như n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_230700045-1678272391_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 3CE Mịn Màng Như Nhung Taupe - Đỏ Gạch 4g\r\nVelvet Lip Tint', 272000, 23),
(18, 'Son Kem Lì 3CE Velvet Lip Tint 4g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, có chất kem mềm mịn tựa như mousse, và là sự kết hợp độc đáo giữa son kem lì và son tint nên chất son vô cùng mỏng nhẹ, không hề gây cảm giác nặng môi như n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_230700047-1681118760_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 3CE Mịn Màng Như Nhung Child Like - Đỏ Cam 4g\r\nVelvet Lip Tint', 272000, 23),
(19, 'Son Thỏi Lì 3CE Vỏ Trong Suốt 3.5g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, kết cấu son mềm mại và nhẹ môi cùng sắc tố cao giúp lên màu chuẩn sắc ngay từ lần đầu tiên. Sản phẩm với thiết kế vỏ trong suốt độc đáo, lạ mắt và ấn tượng', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206330-1679559752_img_358x358_843626_fit_center.jpg', 'Son Thỏi Lì 3CE Vỏ Trong Suốt Red Muse - Đỏ Tươi 3.5g Soft Matte Lipstick', 304000, 23),
(20, 'Son Thỏi Lì 3CE Vỏ Trong Suốt 3.5g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, kết cấu son mềm mại và nhẹ môi cùng sắc tố cao giúp lên màu chuẩn sắc ngay từ lần đầu tiên. Sản phẩm với thiết kế vỏ trong suốt độc đáo, lạ mắt và ấn tượng', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206326-1679296314_img_358x358_843626_fit_center.jpg', 'Son Thỏi Lì 3CE Vỏ Trong Suốt Speak To Me - Đỏ Mận 3.5g Soft Matte Lipstick', 304000, 23),
(21, 'Son Thỏi Lì 3CE Vỏ Trong Suốt 3.5g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, kết cấu son mềm mại và nhẹ môi cùng sắc tố cao giúp lên màu chuẩn sắc ngay từ lần đầu tiên. Sản phẩm với thiết kế vỏ trong suốt độc đáo, lạ mắt và ấn tượng', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206334-1679296122_img_358x358_843626_fit_center.jpg', 'Son Thỏi Lì 3CE Vỏ Trong Suốt Giving Pleasure - Cam Đỏ 3.5g Soft Matte Lipstick', 322000, 23),
(22, 'Son Kem Lì 3CE Velvet Lip Tint 4g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, có chất kem mềm mịn tựa như mousse, và là sự kết hợp độc đáo giữa son kem lì và son tint nên chất son vô cùng mỏng nhẹ, không hề gây cảm giác nặng môi như n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_230700038-1678272381_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 3CE Mịn Như Nhung Daffodil - Đỏ Đất 4g Velvet Lip Tint', 272000, 23),
(23, 'Son Thỏi Lì 3CE Vỏ Trong Suốt 3.5g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, kết cấu son mềm mại và nhẹ môi cùng sắc tố cao giúp lên màu chuẩn sắc ngay từ lần đầu tiên. Sản phẩm với thiết kế vỏ trong suốt độc đáo, lạ mắt và ấn tượng', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206327-1679296279_img_358x358_843626_fit_center.jpg', 'Son Thỏi Lì 3CE Vỏ Trong Suốt Focus On Me - Đỏ San Hô 3.5g Soft Matte Lipstick', 309000, 23),
(24, 'Son Kem Lì 3CE Velvet Lip Tint 4g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, có chất kem mềm mịn tựa như mousse, và là sự kết hợp độc đáo giữa son kem lì và son tint nên chất son vô cùng mỏng nhẹ, không hề gây cảm giác nặng môi như n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_230700039-1678963557_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 3CE Mịn Như Nhung Going Right - Cam Hồng Đất 4g Velvet Lip Tint', 272000, 23),
(25, 'Son Thỏi Lì 3CE Vỏ Trong Suốt 3.5g là sản phẩm son môi đến từ thương hiệu mỹ phẩm 3CE của Hàn Quốc, kết cấu son mềm mại và nhẹ môi cùng sắc tố cao giúp lên màu chuẩn sắc ngay từ lần đầu tiên. Sản phẩm với thiết kế vỏ trong suốt độc đáo, lạ mắt và ấn tượng', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422206333-1679296145_img_358x358_843626_fit_center.jpg', 'Son Thỏi Lì 3CE Vỏ Trong Suốt Over It - Cam Cổ Điển 3.5g Soft Matte Lipstick', 304000, 23),
(29, 'Son Kem Lì Black Rouge Air Fit Velvet Version 2 Mood Filter 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge, với thiết kế giữ nguyên nét thiết kế đặc trưng của dòng Version 1, chỉ khác về màu nắp son tím pastel. Đầu cọ vát chép với khoả', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209457-1681185606_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A12 Dashed Brown Nâu Gạch 4.5g Air Fit Velvet Ver 2 Mood Filter #A12 Dashed Brown', 169000, 24),
(30, 'Son Tint Black Rouge Double Layer Over Velvet 4.1g là sản phẩm son tint đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc, màu sắc lên rõ nét từ lần lướt cọ đầu tiên, chất son hạn chế lem cực kỳ hiệu quả với lớp finish mịn lì mà căng bóng. Đồng thời sản', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209489-1678764232_img_358x358_843626_fit_center.jpg', 'Son Tint Black Rouge DL06 Woody Layer Đỏ Nâu Pha Cam 4.1g Double Layer Over Velvet #DL06 Woody Layer', 213000, 24),
(31, 'Son Kem Lì Black Rouge Air Fit Velvet Ver 6 Blueming Garden 6 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Blueming Garden với chủ đề đầy thơ mộng, tựa khu vườn bí mật đầy sắc hoa nở rộ, như đưa bạn chạm đến những cánh ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209459-1678764188_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A31 Dry Daisy - Đỏ Nâu Trầm 4.5g Air Fit Velvet Tint Ver 6 Blueming Garden #A31 Dry Daisy', 169000, 24),
(32, 'Son Kem Lì Black Rouge Air Fit Velvet Tint Ver 9 4.5ml là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Tiếp nối sự thành công của những season trước, Black Rouge chính thức cho ra mắt bộ sưu tập son Air Fit Velvet Tint Ver 9 - ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422210442-1678764152_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A52 Cinnamon Brown - Nâu Quế 4.5ml Air Fit Velvet Tint Ver 9 Acoustic Mood #A52 Cinnamon Brown', 189000, 24),
(33, 'Son Kem Lì Black Rouge Air Fit Velvet Version 5 Bam 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc, tựa như bức tranh toàn cảnh lột tả những khía cạnh của màn đêm, đối lập giữa sự nổi loạn và nữ tính. Một bộ sưu tập son nữ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209461-1679295520_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A26 Winter Moon Nâu Trầm Pha Cam 4.5g Air Fit Velvet Ver 5 Bam #A26 Winter Moon', 169000, 24),
(34, 'Son Tint Black Rouge Double Layer Over Velvet 4.1g là sản phẩm son tint đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc, màu sắc lên rõ nét từ lần lướt cọ đầu tiên, chất son hạn chế lem cực kỳ hiệu quả với lớp finish mịn lì mà căng bóng. Đồng thời sản', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209488-1678764242_img_358x358_843626_fit_center.jpg', 'Son Tint Black Rouge DL05 Taro Layer - Đỏ Nâu Cherry 4.1g Double Layer Over Velvet #DL05 Taro Layer', 213000, 24),
(35, 'Son Kem Lì Black Rouge Air Fit Velvet Tint Ver 9 4.5ml là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Tiếp nối sự thành công của những season trước, Black Rouge chính thức cho ra mắt bộ sưu tập son Air Fit Velvet Tint Ver 9 - ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422210441-1678764138_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A51 Rad Brick - Gạch Cổ Điển 4.5ml Air Fit Velvet Tint Ver 9 Acoustic Mood #A51 Rad Brick', 189000, 24),
(36, 'Son Kem Lì Black Rouge Air Fit Velvet Ver 6 Blueming Garden 6 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Blueming Garden với chủ đề đầy thơ mộng, tựa khu vườn bí mật đầy sắc hoa nở rộ, như đưa bạn chạm đến những cánh ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209462-1678764176_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A32 Warm Dahlia - Nâu Đất 4.5g Air Fit Velvet Ver 6 Blueming Garden #A32 Warm Dahlia', 169000, 24),
(37, 'Son Kem Lì Black Rouge Air Fit Velvet Version 1 The Red 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Đây là bộ sưu tập đầu tiên của dòng son kem đình đám đến từ Black Rouge Hàn Quốc. 7 màu sắc thời thượng hòa cùng xu hư', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209458-1678764211_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A06 Brick Red - Đỏ Đất 4.5g Air Fit Velvet Ver 1 The Red #A06 Brick Red', 169000, 24),
(38, 'Son Kem Lì Black Rouge Air Fit Velvet Version 1 The Red 4.5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Black Rouge của Hàn Quốc. Đây là bộ sưu tập đầu tiên của dòng son kem đình đám đến từ Black Rouge Hàn Quốc. 7 màu sắc thời thượng hòa cùng xu hư', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422209464-1679295453_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Black Rouge A03 Soft Red - Đỏ Cam 4.5g Air Fit Velvet Ver 1 The Red #A03 Soft Red', 169000, 24),
(43, 'Là màu son khá trầm, MAC Whirl tông nâu đất khá tối, được xem là hàng hiếm tại Việt Nam nhưng lại rất được ưa chuộng tại các Châu khác.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Whirl2.jpg', 'MAC Whirl', 450000, 29),
(44, 'Thêm một tone trầm tính cho bộ sưu tập hằng trăm màu sắc son đa dạng của MAC Cometics, MAC Velvet Teddy màu nâu cam đất giúp nâng tone da bạn tưoi sáng hơn hẳn, tạo một cá tính riêng cho bạn trước ánh nhìn cảu mọi người.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Velvet-Teddy1.jpg', 'MAC Velvet Teddy', 450000, 29),
(45, 'Dù là đi học, đi làm hay dạo phố, dự hội, dã ngoại cùng bạn bè, MAC Sushi Kiss cho màu cam nude nhẹ nhàng, tươi trẻ và đầy quyến rũ, đôi môi bạn sẽ trở nên căng mọng thu hút, như cánh hoa tươi mới nở.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Sushi-Kiss.jpg', 'MAC Sushi Kiss', 450000, 29),
(46, 'MAC So Chaud màu đỏ cam thiên về cam, màu son siêu hot dành cho mùa hè đầy nhiệt huyết, sôi động và rạng rỡ.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-So-Chaud.jpg', 'MAC So Chaud', 450000, 29),
(47, 'Màu hồng sen cực hot của năm nay trong bộ sưu tập hàng trăm màu của MAC Cometics, MAC Silly tông tone da sáng rực, rạng rỡ, đoi môi bạn sẽ như cánh hồng, đầy gợi cảm và thu hút đến bất ngờ.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Silly2.jpg', 'MAC Silly', 450000, 29),
(48, 'MAC Runway Hit sắc hồng nude thời trang giúp da bạn thêm tươi sáng, khuôn mặt thêm rạng rỡ đầy sức sống, một nét quyến rũ khó cưỡng lại!', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Runway-Hit2.jpg', 'MAC Runway Hit', 398000, 29),
(49, 'Bạn mong muốn một đoi môi thật quyến rũ, cuốn hút với màu sắc tươi sáng, dịu dàng, thì hãy chọn cho mình thỏi son MAC Reel Sexy, màu cam san hô nữ tính và quý phái, tạo vẻ trẻ trung và không kém phần sexy.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Reel-Sexy2.jpg', 'MAC Reel Sexy', 398000, 29),
(50, 'Bộ sưu tập son môi màu đỏ không thể thiếu vắng thỏi son MAC Red, màu đỏ truyền thống quyến rũ và rực rỡ khiến bạn nổi bật, tự tin và thu hút mọi người dù là bất cứ nơi đâu.\r\n\r\n', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Red2.jpg', 'MAC Red', 398000, 29),
(51, 'Màu hồng cam đào thêm một chút nhũ nhẹ, MAC Pink Pearl Pop mang lại cho bạn sự nữ tính đầy thu hút, nhje nhàng và tươi tắn đầy sức sống, quyến rũ ánh nhìn mọi người dù bất cứ nơi đâu.', 'https://sonmac.vn/wp-content/uploads/2015/11/MAC-Pink-Pearl-Pop2.png', 'MAC Pink Pearl Pop', 450000, 29),
(58, 'Son Lì Mịn Môi Siêu Nhẹ Maybelline Color Sensational Ultimatte là dòng son lì cao cấp mới nhất từ thương hiệu Maybelline New York, cho bạn 3 tính năng vượt trội \"Mịn - Mờ - Nhẹ tênh\". Với công nghệ làm mờ rãnh môi mang đến lớp finish mịn mờ sang trọng kết', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422204679-1679309851_img_358x358_843626_fit_center.jpg', 'Son Lì Maybelline Mịn Môi Siêu Nhẹ 299 Đỏ Thuần 1.7g Color Sensational Ultimatte #299 More Scarlet', 179000, 25),
(59, 'Son Kem Maybelline Mịn Lì Như Nhung 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205992-1678175443_img_358x358_843626_fit_center.jpg', 'Son Kem Maybelline Mịn Lì Như Nhung CM10 Hồng Trà Sữa 6.4ml Sensational Cushion Mattes #CM10 The Cool Rebel', 188000, 25),
(60, 'Son Kem Maybelline Mịn Lì Như Nhung 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205989-1678175482_img_358x358_843626_fit_center.jpg', 'Son Kem Maybelline Mịn Lì CM07 Hồng Ngọt Nắng 6.4ml Sensational Cushion Mattes #CM07 Lips On Pulse', 188000, 25),
(61, 'Son Kem Lì 16H Lâu Trôi Maybelline New York Super Stay Matte Ink Lipstick là dòng son lì siêu phẩm đến từ thương hiệu mỹ phẩm trang điểm Maybelline New York nổi tiếng của Mỹ khiến hàng triệu cô gái say đắm, với công nghệ mực đàn hồi độc quyền mang lại chấ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_205600303-1679310233_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Maybelline 16h Lâu Trôi 118 Cam Cháy 5ml Super Stay Matte Ink Lipstick (City Edition) - 118 Dancer', 204000, 25),
(62, 'Son Kem Lì Nhẹ Môi Maybelline Sensational Liquid Matte Lipstick 7ml là bộ sưu tập son kem lì đến từ thương hiệu mỹ phẩm trang điểm Maybelline New York, với 8 màu son thời thượng được lấy cảm hứng từ thành phố New York, phù hợp với mọi tông da của các cô n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422204258-1679309911_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Nhẹ Môi Maybelline Màu 17 Đỏ Gạch 7ml\r\nSensational Liquid Matte Lipstick - 17 Stop On Red', 104000, 25),
(63, 'Son Kem Lì 16H Lâu Trôi Maybelline New York Super Stay Matte Ink Lipstick là dòng son lì siêu phẩm đến từ thương hiệu mỹ phẩm trang điểm Maybelline New York nổi tiếng của Mỹ khiến hàng triệu cô gái say đắm, với công nghệ mực đàn hồi độc quyền mang lại chấ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_205600316-1678175556_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Maybelline 16h Lâu Trôi #205 Đỏ Cam 5ml Super Stay Matte Ink Lipstick (City Edition) - 205 Assertive', 209000, 25),
(64, 'Son Kem Maybelline Mịn Lì Như Nhung 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205991-1678175456_img_358x358_843626_fit_center.jpg', 'Son Kem Maybelline Mịn Lì Như Nhung CM09 Mứt Cà Chua 6.4ml Sensational Cushion Mattes #CM09 Red Lips Society', 178000, 25),
(65, 'Son Kem Lì Nhẹ Môi Maybelline Sensational Liquid Matte Lipstick 7ml là bộ sưu tập son kem lì đến từ thương hiệu mỹ phẩm trang điểm Maybelline New York, với 8 màu son thời thượng được lấy cảm hứng từ thành phố New York, phù hợp với mọi tông da của các cô n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422204257-1679309892_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Nhẹ Môi Maybelline 12 Đỏ Cam Cháy 7ml\r\nSensational Liquid Matte Lipstick - 12 More Than Red', 104000, 25),
(66, 'Son Kem Maybelline Mịn Lì Như Nhung 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205987-1679309822_img_358x358_843626_fit_center.jpg', 'Son Kem Maybelline Mịn Lì CM01 Đỏ Hồng Cherry 6.4ml Sensational Cushion Mattes #CM01 The Devil Wears Red', 188000, 25),
(67, 'Son Kem Maybelline Mịn Lì Như Nhung 6.4ml là sản phẩm son kem đến từ thương hiệu mỹ phẩm nổi tiếng Maybelline New York, với cảm hứng từ cushion Maybelline cho ra đời dòng son Sensational Cushion Matte với kết cấu mềm mại, mịn lì như nhung. Đặc biệt, sử dụ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205990-1678175469_img_358x358_843626_fit_center.jpg', 'Son Kem Maybelline Mịn Lì Như Nhung CM08 Vang Đỏ 6.4ml Sensational Cushion Mattes #CM08 Girl Who Rules', 188000, 25),
(73, 'Son Kem Lì Gilaa Long Wear Lip Cream 5g là dòng son môi đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng gồm 7 màu son thời thượng phù hợp với mọi tông da Châu Á, chất son mềm mượt không gây cảm giác khô môi đặc biệt với khả năng mờ thâ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422201927-1679559611_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa Thế Hệ Mới 06 Rainy Day - Đỏ Cam 5g Long Wear Lip Cream', 162000, 26),
(74, 'Son Kem Lì Gilaa Long Wear Lip Cream 5g là dòng son môi đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng gồm 7 màu son thời thượng phù hợp với mọi tông da Châu Á, chất son mềm mượt không gây cảm giác khô môi đặc biệt với khả năng mờ thâ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422201922-1679559641_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa Thế Hệ Mới 01 Glad Day - Đỏ Nâu 5g Long Wear Lip Cream', 162000, 26),
(75, 'Son Kem Lì Gilaa Long Wear Lip Cream Rich Rosie Collection 5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng, thời thượng phù hợp cho mọi làn da. Ngoài ra, son chứa nhiều thành phần dưỡng môi như Bisabolol, bơ h', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205577-1679297141_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 08 Take A Sip - Đỏ Rượu Vang 5g\r\nLong Wear Lip Cream Rich Rosie Collection #08 Take A Sip', 193000, 26),
(76, 'Son Kem Lì Gilaa Long Wear Lip Cream 5g là dòng son môi đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng gồm 7 màu son thời thượng phù hợp với mọi tông da Châu Á, chất son mềm mượt không gây cảm giác khô môi đặc biệt với khả năng mờ thâ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422201925-1679559632_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa Thế Hệ Mới 04 First Day - Đỏ Gạch Trầm 5g Long Wear Lip Cream', 150000, 26),
(77, 'Son Kem Lì Gilaa Long Wear Lip Cream 5g là dòng son môi đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng gồm 7 màu son thời thượng phù hợp với mọi tông da Châu Á, chất son mềm mượt không gây cảm giác khô môi đặc biệt với khả năng mờ thâ', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422201926-1679559622_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa Thế Hệ Mới 05 Gloomy Day - Cam Cháy 5g Long Wear Lip Cream', 162000, 26),
(78, 'Son Kem Lì Gilaa Long Wear Lip Cream Rich Rosie Collection 5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng, thời thượng phù hợp cho mọi làn da. Ngoài ra, son chứa nhiều thành phần dưỡng môi như Bisabolol, bơ h', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205578-1679297154_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 09 Hei Hei - Đỏ Hồng Đào 5g\r\nLong Wear Lip Cream Rich Rosie Collection #09 Hei Hei', 193000, 26),
(79, 'Son Kem Lì Gilaa Long Wear Lip Cream Rich Rosie Collection 5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng, thời thượng phù hợp cho mọi làn da. Ngoài ra, son chứa nhiều thành phần dưỡng môi như Bisabolol, bơ h', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205580-1679297174_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 12 Lavish - Cam Đất 5g\r\nLong Wear Lip Cream Rich Rosie Collection #12 Lavish', 193000, 26),
(80, 'Son Kem Lì Gilaa Long Wear Lip Cream Rich Rosie Collection 5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng, thời thượng phù hợp cho mọi làn da. Ngoài ra, son chứa nhiều thành phần dưỡng môi như Bisabolol, bơ h', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205579-1679297165_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 11 Set Sail - Cam Gạch Trầm 5g\r\nLong Wear Lip Cream Rich Rosie Collection #11 Set Sail', 198000, 26),
(81, 'Son Kem Lì Gilaa Long Wear Lip Cream Rich Rosie Collection 5g là sản phẩm son kem lì đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với bảng màu đa dạng, thời thượng phù hợp cho mọi làn da. Ngoài ra, son chứa nhiều thành phần dưỡng môi như Bisabolol, bơ h', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422205582-1679394329_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 10 May Beauty - Hồng Đất 5g\r\nLong Wear Lip Cream Rich Rosie Collection', 208000, 26),
(82, 'Son Môi Gilaa Plumping Lip Serum 3.6g là dòng son môi đến từ thương hiệu mỹ phẩm Gilaa của Hàn Quốc, với công thức độc quyền chứa thành phần Volufiline và tinh dầu bạc hà tạo độ căng mọng, mềm mịn môi. Đặc biệt, sản phẩm bổ sung 40% tinh chất serum giúp n', 'https://media.hasaki.vn/catalog/product/g/o/google-shopping_422203716-1679394409_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Gilaa 03 Hestia - Nâu Chocolate 3.6g\r\nPlumping Lip Serum #03 Hestia', 260000, 26),
(87, 'Son Kem 2 Đầu Lemonade Perfect Couple Lip Fashionistar 8g là dòng son môi đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Bộ sưu tập gồm các son kem lì tông nâu đất trầm ấm tôn da và cá tính. Đặc biệt được thiết kế cả hai đầu đều là hai đầu son kem với ', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-2-dau-lemonade-04-red-heels-hong-do-do-ruou-8g-1_img_358x358_843626_fit_center.jpg', 'Son Kem 2 Đầu Lemonade 04 Red Heels Hồng Đỏ & Đỏ Rượu 8g Perfect Couple Lip Fashionistar #04 Red Heels', 209000, 27),
(88, 'Son Kem 2 Đầu Lemonade Perfect Couple Lip Fashionistar 8g là dòng son môi đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Bộ sưu tập gồm các son kem lì tông nâu đất trầm ấm tôn da và cá tính. Đặc biệt được thiết kế cả hai đầu đều là hai đầu son kem với ', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-2-dau-lemonade-05-blush-bralette-cam-sua-do-dat-8g-1_img_358x358_843626_fit_center.jpg', 'Son Kem 2 Đầu Lemonade 05 Blush Bralette Cam Sữa, Đỏ Đất 8g Perfect Couple Lip Fashionistar #05 Blush Bralette', 194000, 27),
(89, 'Son Kem 2 Đầu Lemonade Perfect Couple Lip Fashionistar 8g là dòng son môi đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Bộ sưu tập gồm các son kem lì tông nâu đất trầm ấm tôn da và cá tính. Đặc biệt được thiết kế cả hai đầu đều là hai đầu son kem với ', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-2-dau-lemonade-02-lemonpods-cam-nau-nau-dat-8g-1_img_358x358_843626_fit_center.jpg', 'Son Kem 2 Đầu Lemonade 02 Lemonpods Cam Nâu & Nâu Đất 8g Perfect Couple Lip Fashionistar #02 Lemonpods', 199000, 27),
(90, 'Son Kem Lì 2 Đầu Lemonade Perfect Couple Lip Version 2 7.5g là sản phẩm son kem đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Sự trở lại của 5 màu son \"Best Selling\" trong bộ sưu tập Perfect Couple Lip với phương diện hoàn hảo hơn, nhiều dưỡng chất hơ', 'https://media.hasaki.vn/catalog/product/f/a/facebook-dynamic-son-kem-li-2-dau-lemonade-05-jealous-do-dat-ban-moi-7-5g-1658306943_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 2 Đầu Lemonade 05 Jealous Đỏ Đất Bản Mới 7.5g Perfect Couple Lip - Version 2 #05 Jealous', 238000, 27),
(91, 'Son Kem Lì 2 Đầu Lemonade Perfect Couple Lip Version 2 7.5g là sản phẩm son kem đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Sự trở lại của 5 màu son \"Best Selling\" trong bộ sưu tập Perfect Couple Lip với phương diện hoàn hảo hơn, nhiều dưỡng chất hơ', 'https://media.hasaki.vn/catalog/product/f/a/facebook-dynamic-son-kem-li-2-dau-lemonade-03-tea-do-nau-dat-ban-moi-7-5g-1654835729_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 2 Đầu Lemonade 03 Tea Đỏ Nâu Đất Bản Mới 7.5g Perfect Couple Lip - Version 2 #03 Tea', 220000, 27),
(92, 'Son Kem Lì Lemonade SuperNatural Matte Lipcream 5g là dòng son kem lì mới nhất vừa được ra mắt từ thương hiệu mỹ phẩm trang điểm LEMONADE FROM #QUACHANH, được lấy cảm hứng từ những siêu năng lực tiềm ẩn của mọi cô gái, bao gồm 5 thỏi son kem lì với tông m', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-li-lemonade-mau-do-dat-05-hot-as-fire-5g_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Lemonade Màu Đỏ Đất 05 Hot As Fire 5g\r\nSuperNatural Matte Lipcream #05 Hot As Fire', 157000, 27),
(93, 'Son Kem Lì Nhẹ Môi LEMONADE Want It Got It Lipcream là dòng sản phẩm mới nhất thuộc Collection “Want It Got It” vừa được ra mắt từ thương hiệu LEMONADE của “phù thủy makeup” Quách Ánh, với chất son mỏng mịn, siêu nhẹ trên môi, cho bạn một bờ môi mịn lì nh', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-li-nhe-moi-lemonade-mau-do-nau-dat-i-want-07-5g-1_1_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Nhẹ Môi LEMONADE Màu Đỏ Nâu Đất I Want 07 5g Want It Got It Lipcream', 169000, 27),
(94, 'Son Kem 2 Đầu Lemonade Perfect Couple Lip Fashionistar 8g là dòng son môi đến từ thương hiệu mỹ phẩm Lemonade của Việt Nam. Bộ sưu tập gồm các son kem lì tông nâu đất trầm ấm tôn da và cá tính. Đặc biệt được thiết kế cả hai đầu đều là hai đầu son kem với ', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-2-dau-lemonade-mau-01-beauty-glasses-8g-1_img_358x358_843626_fit_center.jpg', 'Son Kem 2 Đầu Lemonade 01 Beauty Glasses Cam Nâu, Đỏ Đất 8g Perfect Couple Lip Fashionistar #01 Beauty Glasses', 223000, 27),
(95, 'Mới đây, thương hiệu LEMONADE của “phù thủy makeup” Quách Ánh đã cho tung ra thị trường bộ sưu tập giới hạn mới nhất của dòng son môi đình đám Perfect Couple Lip, với sự hợp tác của ca sĩ Đông Nhi sau hơn nửa năm ấp ủ và tìm hiểu nghiên cứu, đó chính là L', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-li-2-dau-lemonade-x-dong-nhi-mau-cam-dao-02-couple-01_img_358x358_843626_fit_center.jpg', 'Son Kem Lì 2 Đầu Lemonade Màu Cam Đào 02 Couple 7.5ml Perfect Couple Lip Love Collection', 279000, 27),
(96, 'Son Kem Lì Nhẹ Môi LEMONADE Want It Got It Lipcream là dòng sản phẩm mới nhất thuộc Collection “Want It Got It” vừa được ra mắt từ thương hiệu LEMONADE của “phù thủy makeup” Quách Ánh, với chất son mỏng mịn, siêu nhẹ trên môi, cho bạn một bờ môi mịn lì nh', 'https://media.hasaki.vn/catalog/product/s/o/son-kem-li-nhe-moi-lemonade-mau-cam-do-dat-i-want-04-5g-1_img_358x358_843626_fit_center.jpg', 'Son Kem Lì Nhẹ Môi LEMONADE Màu Cam Đỏ Đất I Want 04 5g Want It Got It Lipcream', 169000, 27);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `tokens`
--

CREATE TABLE `tokens` (
  `id` int(11) NOT NULL,
  `created_date` datetime DEFAULT NULL,
  `token` varchar(255) DEFAULT NULL,
  `user_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `tokens`
--

INSERT INTO `tokens` (`id`, `created_date`, `token`, `user_id`) VALUES
(9, '2022-10-28 08:23:40', 'fb32b650-fd27-4dc3-b8e2-9bee7f5a66f3', 9),
(30, '2022-11-06 16:27:54', 'cbe9f4f5-982b-44d6-ae60-2178769f617f', 30),
(37, '2023-04-05 11:46:45', '578ed37c-617e-42ce-9018-8b93be5086c6', 37),
(38, '2023-04-19 15:51:35', 'ac09020d-8769-4a23-829c-7a6bd2a0674f', 38),
(39, '2023-04-23 17:29:25', '2490b51d-adad-4aa0-8745-c854b98958be', 39);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `first_name` varchar(255) DEFAULT NULL,
  `last_name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `email`, `first_name`, `last_name`, `password`, `role`) VALUES
(9, 'admin@gmail.com', 'admin', 'admin', '21232F297A57A5A743894A0E4A801FC3', 'admin'),
(30, 'tuantm@gmail.com', 'tuan', 'tm', '25F9E794323B453885F5181F1B624D0B', 'user'),
(37, 'cong@gmail.com', 'cong', 'quach', '00C66AAF5F2C3F49946F15C1AD2EA0D3', NULL),
(38, 'blink.leggo2002@gmail.com', 'cong', 'cong', '3D4633C39D2223B99599F5339CA6FBB8', NULL),
(39, 'cong', 'string', 'string', 'B45CFFE084DD3D20D928BEE85E7B0F21', NULL);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK3weixb4hpcmv5xc73lxe4762i` (`product_id`),
  ADD KEY `FKa10mmlavm34n720q8rnc4ufc8` (`user_id`);

--
-- Chỉ mục cho bảng `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKefhwceqqnvcl3iw72iv2r2w4o` (`product_id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category_id` (`category_id`);

--
-- Chỉ mục cho bảng `tokens`
--
ALTER TABLE `tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FKck21ekaqng736h8ohx6l9xrgv` (`user_id`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `cart`
--
ALTER TABLE `cart`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT cho bảng `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT cho bảng `tokens`
--
ALTER TABLE `tokens`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=40;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `cart`
--
ALTER TABLE `cart`
  ADD CONSTRAINT `FK3weixb4hpcmv5xc73lxe4762i` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  ADD CONSTRAINT `FKa10mmlavm34n720q8rnc4ufc8` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

--
-- Các ràng buộc cho bảng `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `FKefhwceqqnvcl3iw72iv2r2w4o` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`);

--
-- Các ràng buộc cho bảng `products`
--
ALTER TABLE `products`
  ADD CONSTRAINT `products_ibfk_1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`);

--
-- Các ràng buộc cho bảng `tokens`
--
ALTER TABLE `tokens`
  ADD CONSTRAINT `FKck21ekaqng736h8ohx6l9xrgv` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
