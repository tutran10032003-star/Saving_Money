/* Eco-Buddy Memory Match — 60 bilingual energy-saving tips in 8 categories. */
(function(){
  const groups = [
    {id:"lighting",name:{en:"Lighting",vi:"Đèn chiếu sáng"},items:[
      ["Use daylight before switching on lights.", "Tận dụng ánh sáng tự nhiên trước khi bật đèn.", "Use daylight", "Tận dụng nắng", "🌞"],
      ["Turn lights off whenever you leave an empty room.", "Tắt đèn khi rời khỏi phòng không có người.", "Lights off", "Tắt đèn", "💡"],
      ["Choose LED bulbs when replacing old bulbs.", "Chọn bóng LED khi thay bóng đèn cũ.", "Choose LED bulbs", "Chọn bóng LED", "🪔"],
      ["Use task lighting instead of lighting an entire room.", "Dùng đèn chiếu sáng tập trung thay vì bật sáng cả phòng.", "Task lighting", "Đèn đúng chỗ", "🔦"],
      ["Keep lampshades and bulbs clean for better light output.", "Vệ sinh chụp đèn và bóng đèn để ánh sáng hiệu quả hơn.", "Clean light bulbs", "Vệ sinh bóng đèn", "🧽"],
      ["Use timers or motion sensors in areas used briefly.", "Dùng hẹn giờ hoặc cảm biến chuyển động ở khu vực chỉ sử dụng trong thời gian ngắn.", "Motion sensors", "Cảm biến chuyển động", "🚶"],
      ["Choose a bulb brightness that matches the room.", "Chọn độ sáng bóng đèn phù hợp với căn phòng.", "Right bulb brightness", "Độ sáng phù hợp", "🔆"],
      ["Open curtains during the day instead of using lights.", "Mở rèm ban ngày thay vì bật đèn.", "Open curtains", "Mở rèm ban ngày", "🪟"]
    ]},
    {id:"standby",name:{en:"Standby power",vi:"Điện chờ"},items:[
      ["Switch off devices fully when standby is unnecessary.", "Tắt hẳn thiết bị khi không cần để chế độ chờ.", "Switch off fully", "Tắt hẳn thiết bị", "🔌"],
      ["Use a switched power strip for grouped electronics.", "Dùng ổ cắm có công tắc cho nhóm thiết bị điện tử.", "Switched power strip", "Ổ cắm công tắc", "🧰"],
      ["Unplug chargers when they are not in use.", "Rút bộ sạc khi không sử dụng.", "Unplug chargers", "Rút bộ sạc", "🔋"],
      ["Enable power-saving settings on computers and TVs.", "Bật chế độ tiết kiệm điện trên máy tính và TV.", "Power-saving mode", "Chế độ tiết kiệm", "💻"],
      ["Avoid leaving game consoles in high-power standby mode.", "Tránh để máy chơi game ở chế độ chờ tiêu thụ nhiều điện.", "Console standby off", "Tắt chờ máy game", "🎮"],
      ["Check which devices draw power overnight.", "Kiểm tra thiết bị nào vẫn tiêu thụ điện qua đêm.", "Check overnight power", "Kiểm tra điện đêm", "🌙"],
      ["Turn off monitors when taking a long break.", "Tắt màn hình khi nghỉ trong thời gian dài.", "Turn off monitors", "Tắt màn hình", "🖥️"],
      ["Choose low-energy settings for connected speakers.", "Chọn chế độ tiết kiệm điện cho loa thông minh.", "Efficient speaker mode", "Chế độ loa tiết kiệm", "🔊"]
    ]},
    {id:"kitchen",name:{en:"Kitchen",vi:"Nhà bếp"},items:[
      ["Put lids on pans to cook food faster.", "Đậy nắp nồi để thức ăn chín nhanh hơn.", "Cover cooking pans", "Đậy nắp nồi", "🍲"],
      ["Boil only the amount of water you need.", "Chỉ đun lượng nước bạn cần.", "Boil needed water", "Đun đủ nước", "🫖"],
      ["Match pan size to the cooker ring.", "Chọn nồi có kích thước phù hợp với vùng nấu.", "Match pan size", "Chọn nồi vừa bếp", "🍳"],
      ["Use a microwave for small portions when suitable.", "Dùng lò vi sóng cho khẩu phần nhỏ khi phù hợp.", "Microwave small portions", "Lò vi sóng", "🍱"],
      ["Keep the oven door closed while cooking.", "Đóng cửa lò nướng trong khi nấu.", "Keep oven closed", "Đóng cửa lò", "🔥"],
      ["Defrost food safely before cooking to reduce cooking time.", "Rã đông thực phẩm an toàn trước khi nấu để giảm thời gian chế biến.", "Defrost before cooking", "Rã đông trước nấu", "🧊"],
      ["Run the dishwasher only with a suitable full load.", "Chỉ chạy máy rửa chén khi có đủ lượng bát đĩa phù hợp.", "Full dishwasher loads", "Chạy máy đủ tải", "🍽️"],
      ["Use residual heat to finish cooking when safe.", "Tận dụng nhiệt dư để hoàn tất món ăn khi an toàn.", "Use leftover heat", "Tận dụng nhiệt dư", "🥘"]
    ]},
    {id:"laundry",name:{en:"Laundry",vi:"Giặt giũ"},items:[
      ["Wash at 30°C when suitable for the fabric and load.", "Giặt ở 30°C khi phù hợp với chất liệu và đồ giặt.", "Wash at 30°C", "Giặt ở 30°C", "👕"],
      ["Wash full loads instead of several small loads.", "Giặt đủ tải thay vì chia thành nhiều mẻ nhỏ.", "Wash full loads", "Giặt đủ tải", "🧺"],
      ["Use a high spin speed to reduce drying time when suitable.", "Chọn tốc độ vắt cao để giảm thời gian sấy khi phù hợp.", "Spin clothes faster", "Vắt tốc độ cao", "🌀"],
      ["Air-dry clothes when weather and space allow.", "Phơi khô quần áo khi thời tiết và không gian cho phép.", "Air-dry clothes", "Phơi khô tự nhiên", "🌤️"],
      ["Clean the dryer filter regularly.", "Vệ sinh bộ lọc máy sấy thường xuyên.", "Clean dryer filter", "Vệ sinh lọc sấy", "🧹"],
      ["Use an eco cycle when it suits the laundry.", "Dùng chu trình tiết kiệm khi phù hợp với đồ giặt.", "Choose eco cycle", "Chọn chế độ Eco", "🌿"],
      ["Avoid running the dryer for longer than necessary.", "Tránh chạy máy sấy lâu hơn mức cần thiết.", "Avoid excess drying", "Tránh sấy quá lâu", "⏱️"],
      ["Separate laundry by drying needs to avoid over-drying.", "Phân loại đồ giặt theo nhu cầu làm khô để tránh sấy quá mức.", "Sort laundry smartly", "Phân loại đồ giặt", "🧦"]
    ]},
    {id:"fridge",name:{en:"Refrigerator",vi:"Tủ lạnh"},items:[
      ["Keep the fridge around 3–5°C and freezer near −18°C.", "Giữ ngăn mát khoảng 3–5°C và ngăn đông gần −18°C.", "Set fridge temperature", "Chỉnh nhiệt tủ lạnh", "🌡️"],
      ["Let hot food cool safely before placing it in the fridge.", "Để thức ăn nóng nguội an toàn trước khi cho vào tủ lạnh.", "Cool food first", "Để nguội thức ăn", "🥡"],
      ["Keep the fridge door closed as much as possible.", "Hạn chế mở cửa tủ lạnh quá lâu.", "Close fridge door", "Đóng cửa tủ lạnh", "🚪"],
      ["Leave space around the fridge for ventilation.", "Chừa khoảng trống quanh tủ lạnh để thông gió.", "Allow fridge airflow", "Chừa khe thông gió", "🌬️"],
      ["Defrost a freezer when ice build-up becomes excessive.", "Rã đông ngăn đá khi lớp tuyết tích tụ quá dày.", "Defrost excess ice", "Rã đông ngăn đá", "❄️"],
      ["Check door seals so cold air does not escape.", "Kiểm tra gioăng cửa để hơi lạnh không thất thoát.", "Check door seals", "Kiểm tra gioăng cửa", "🧲"],
      ["Avoid placing the fridge beside an oven or radiator.", "Tránh đặt tủ lạnh cạnh lò nướng hoặc bộ tản nhiệt.", "Keep heat away", "Tránh nguồn nhiệt", "📍"],
      ["Organise food so the door can be closed quickly.", "Sắp xếp thực phẩm để có thể đóng cửa tủ nhanh chóng.", "Organise fridge food", "Sắp xếp thực phẩm", "🥬"]
    ]},
    {id:"heating",name:{en:"Heating",vi:"Sưởi ấm"},items:[
      ["Heat the rooms you use rather than the whole home.", "Chỉ sưởi những phòng đang sử dụng thay vì cả nhà.", "Heat used rooms", "Sưởi phòng đang dùng", "🏠"],
      ["Close curtains at night to reduce heat loss.", "Kéo rèm vào ban đêm để giảm thất thoát nhiệt.", "Close curtains", "Đóng rèm ban đêm", "🌜"],
      ["Keep radiators clear so warm air can circulate.", "Không che chắn bộ tản nhiệt để khí ấm lưu thông.", "Clear radiator space", "Không chắn bộ sưởi", "🪭"],
      ["Lower the thermostat slightly when comfortable.", "Giảm nhẹ nhiệt độ bộ điều nhiệt khi vẫn thấy thoải mái.", "Lower thermostat", "Giảm nhiệt độ", "🎛️"],
      ["Use draught excluders around doors where appropriate.", "Dùng vật chắn gió ở khe cửa khi phù hợp.", "Block door draughts", "Chắn khe gió", "🧱"],
      ["Set heating schedules around your daily routine.", "Cài lịch sưởi phù hợp với sinh hoạt hằng ngày.", "Schedule heating", "Hẹn giờ sưởi", "⏰"],
      ["Do not heat empty rooms unnecessarily.", "Không sưởi những phòng trống khi không cần thiết.", "Skip empty rooms", "Không sưởi phòng trống", "🛋️"],
      ["Bleed radiators if they have cold spots and the system allows it.", "Xả khí bộ tản nhiệt nếu có vùng lạnh và hệ thống cho phép.", "Bleed cold radiators", "Xả khí bộ sưởi", "🪛"]
    ]},
    {id:"tariff",name:{en:"Electricity tariffs",vi:"Giá điện"},items:[
      ["Shift flexible electricity use to cheaper tariff periods.", "Chuyển các hoạt động dùng điện linh hoạt sang khung giờ giá rẻ.", "Use cheaper hours", "Dùng giờ giá rẻ", "🕒"],
      ["Avoid heavy appliance use during peak-rate periods when possible.", "Hạn chế dùng thiết bị công suất lớn vào giờ cao điểm nếu có thể.", "Avoid peak usage", "Tránh giờ cao điểm", "⚡"],
      ["Check your supplier's current tariff before changing habits.", "Kiểm tra biểu giá hiện tại của nhà cung cấp trước khi thay đổi thói quen.", "Check current tariff", "Kiểm tra biểu giá", "📄"],
      ["Use the app's tariff rates to plan flexible tasks.", "Dùng biểu giá trong ứng dụng để lên lịch các việc linh hoạt.", "Plan flexible tasks", "Lên lịch dùng điện", "📅"],
      ["Compare the unit rate and standing charge together.", "So sánh cả đơn giá điện và phí cố định hằng ngày.", "Compare total charges", "So sánh chi phí", "🧮"],
      ["A cheaper night rate helps only when usage moves to that period.", "Giá điện ban đêm rẻ chỉ có lợi khi chuyển được mức dùng sang khung giờ đó.", "Shift night usage", "Chuyển điện ban đêm", "🌃"],
      ["Check whether your meter records day, night and peak use.", "Kiểm tra công tơ có ghi nhận điện ngày, đêm và giờ cao điểm không.", "Check meter periods", "Kiểm tra công tơ", "🔢"],
      ["Review bills regularly to spot changes in rates or usage.", "Xem hóa đơn thường xuyên để nhận biết thay đổi về giá hoặc mức tiêu thụ.", "Review energy bills", "Xem lại hóa đơn", "🧾"]
    ]},
    {id:"bathroom",name:{en:"Bathroom & hot water",vi:"Phòng tắm và nước nóng"},items:[
      ["Take shorter showers to reduce hot-water energy use.", "Tắm nhanh hơn để giảm năng lượng dùng cho nước nóng.", "Take shorter showers", "Tắm nhanh hơn", "🚿"],
      ["Use a water-efficient showerhead where suitable.", "Dùng vòi sen tiết kiệm nước khi phù hợp.", "Efficient showerhead", "Vòi sen tiết kiệm", "🚰"],
      ["Fix dripping hot taps promptly.", "Sửa vòi nước nóng bị rò rỉ sớm.", "Fix hot taps", "Sửa vòi rò", "🛠️"],
      ["Set hot-water temperature safely and avoid excessive heating.", "Cài nhiệt độ nước nóng an toàn và tránh làm nóng quá mức.", "Set safe temperature", "Chỉnh nhiệt an toàn", "🧪"],
      ["Turn off the tap while brushing your teeth.", "Khóa vòi nước khi đánh răng.", "Turn off tap", "Khóa vòi nước", "🪥"],
      ["Use cold water for handwashing when appropriate.", "Dùng nước lạnh để rửa tay khi phù hợp.", "Wash with cold", "Rửa bằng nước lạnh", "🧼"],
      ["Insulate accessible hot-water pipes where suitable.", "Bọc cách nhiệt đường ống nước nóng ở vị trí phù hợp.", "Insulate hot pipes", "Bọc ống nước nóng", "🧣"],
      ["Avoid reheating more hot water than you need.", "Tránh đun lại nhiều nước nóng hơn mức cần dùng.", "Heat needed water", "Đun đủ nước nóng", "🛁"]
    ]}
  ];
  window.ecoMemoryTips = groups.flatMap(group => group.items.map((pair,index)=>({
    id:group.id+"-"+(index+1), category:group.id, categoryName:group.name,
    en:pair[0], vi:pair[1],
    short:{en:pair[2],vi:pair[3]},
    icon:pair[4]
  })));
})();