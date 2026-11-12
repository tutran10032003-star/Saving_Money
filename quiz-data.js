/* Eco-Buddy Home Manager — bilingual quiz bank
 * Keep quiz content here so questions can be maintained independently of index.html.
 * answerIndex is zero-based.
 */
window.ecoQuizPool = [
  {
    q:{en:"Which appliance consumes the most standby power in a typical home?",vi:"Thiết bị nào thường tiêu thụ điện chờ nhiều nhất trong gia đình?"},
    options:{en:["A. Microwave / TV","B. LED light bulb"],vi:["A. Lò vi sóng / TV","B. Bóng đèn LED"]},
    correct:0,
    explain:{en:"Correct! Microwaves and TVs can draw power while in standby mode.",vi:"Chính xác! Lò vi sóng và TV vẫn có thể tiêu thụ điện khi ở chế độ chờ."}
  },
  {
    q:{en:"What is the cheapest time period for electricity under SST Saver+?",vi:"Khung giờ nào có giá điện rẻ nhất theo gói SST Saver+?"},
    options:{en:["A. 17:00–19:00 (Peak)","B. 23:00–08:00 (Night Saver)"],vi:["A. 17:00–19:00 (Giờ cao điểm)","B. 23:00–08:00 (Giờ tiết kiệm ban đêm)"]},
    correct:1,
    explain:{en:"Correct! The Night Saver rate is €0.1954/kWh, lower than the day and peak rates.",vi:"Chính xác! Giá điện Night Saver là €0.1954/kWh, thấp hơn giá giờ ngày và giờ cao điểm."}
  },
  {
    q:{en:"Which activity uses the most energy for household water heating?",vi:"Hoạt động nào tiêu thụ nhiều năng lượng nhất khi đun nước sinh hoạt?"},
    options:{en:["A. Taking long showers","B. Washing hands with cold water"],vi:["A. Tắm vòi sen trong thời gian dài","B. Rửa tay bằng nước lạnh"]},
    correct:0,
    explain:{en:"Correct! Long hot showers require a lot of energy to heat water.",vi:"Chính xác! Tắm nước nóng lâu khiến hệ thống phải tiêu thụ nhiều năng lượng để làm nóng nước."}
  },
  {
    q:{en:"When is the worst time to run your washing machine or dishwasher?",vi:"Thời điểm nào không nên chạy máy giặt hoặc máy rửa chén?"},
    options:{en:["A. Peak hours (17:00–19:00)","B. Night Saver hours (after 23:00)"],vi:["A. Giờ cao điểm (17:00–19:00)","B. Giờ Night Saver (sau 23:00)"]},
    correct:0,
    explain:{en:"Correct! Peak hours have the highest rate (€0.3968/kWh).",vi:"Chính xác! Giờ cao điểm có giá điện cao nhất (€0.3968/kWh)."}
  },
  {
    q:{en:"How much XP do you get for completing the Kitchen Safety Checklist?",vi:"Bạn nhận được bao nhiêu XP khi hoàn thành danh sách kiểm tra an toàn nhà bếp?"},
    options:{en:["A. +10 XP","B. +30 XP"],vi:["A. +10 XP","B. +30 XP"]},
    correct:1,
    explain:{en:"Correct! You earn +30 XP for completing all five kitchen safety steps.",vi:"Chính xác! Bạn nhận được +30 XP khi hoàn thành cả 5 bước kiểm tra an toàn nhà bếp."}
  },
  {
    q:{en:"What color badge does Bé Mây show during Night Saver hours?",vi:"Bé Mây hiển thị huy hiệu màu gì trong khung giờ Night Saver?"},
    options:{en:["A. 🟢 Green badge","B. 🔴 Red badge"],vi:["A. 🟢 Huy hiệu xanh lá","B. 🔴 Huy hiệu đỏ"]},
    correct:0,
    explain:{en:"Correct! The green badge indicates that the Night Saver rate is active.",vi:"Chính xác! Huy hiệu xanh lá cho biết giá điện Night Saver đang được áp dụng."}
  },
  {
    q:{en:"Is it good practice to leave phone chargers plugged into the wall 24/7?",vi:"Có nên cắm bộ sạc điện thoại vào ổ điện suốt ngày đêm không?"},
    options:{en:["A. Yes, it uses no power","B. No, it can draw a small idle current"],vi:["A. Có, vì không tiêu thụ điện","B. Không, vì vẫn có thể tiêu thụ một lượng điện nhỏ"]},
    correct:1,
    explain:{en:"Correct! Unplugging chargers when they are not in use helps reduce standby energy.",vi:"Chính xác! Rút sạc khi không sử dụng giúp giảm lượng điện tiêu thụ ở chế độ chờ."}
  },
  {
    q:{en:"What day of the week is waste collection scheduled in the calendar?",vi:"Lịch trong ứng dụng đang đánh dấu ngày thu gom rác vào thứ mấy?"},
    options:{en:["A. Tuesday","B. Saturday"],vi:["A. Thứ Ba","B. Thứ Bảy"]},
    correct:0,
    explain:{en:"Correct! Tuesdays are marked as waste collection days.",vi:"Chính xác! Thứ Ba được đánh dấu là ngày thu gom rác."}
  },
  {
    q:{en:"What level does Bé Mây reach after passing 100 XP?",vi:"Bé Mây đạt cấp độ nào khi vượt mốc 100 XP?"},
    options:{en:["A. Level 1: Sprout","B. Level 2: Green Sprout"],vi:["A. Cấp 1: Mầm non","B. Cấp 2: Mầm xanh"]},
    correct:1,
    explain:{en:"Correct! Reaching 100 XP upgrades Bé Mây to Level 2.",vi:"Chính xác! Khi đạt 100 XP, Bé Mây sẽ lên cấp 2."}
  },
  {
    q:{en:"Why should you cover pots with lids when cooking?",vi:"Vì sao nên đậy nắp nồi khi nấu ăn?"},
    options:{en:["A. Food cooks faster and saves energy","B. It makes the kitchen colder"],vi:["A. Thức ăn chín nhanh hơn và tiết kiệm năng lượng","B. Giúp nhà bếp mát hơn"]},
    correct:0,
    explain:{en:"Correct! Lids retain heat, helping water boil faster with less energy.",vi:"Chính xác! Nắp nồi giữ nhiệt, giúp nước sôi nhanh hơn và giảm năng lượng tiêu thụ."}
  },
  {
    q:{en:"About how much does Night Saver electricity cost per kWh?",vi:"Giá điện Night Saver khoảng bao nhiêu cho mỗi kWh?"},
    options:{en:["A. €0.1954/kWh","B. €0.5000/kWh"],vi:["A. €0.1954/kWh","B. €0.5000/kWh"]},
    correct:0,
    explain:{en:"Correct! The Night Saver rate is €0.1954/kWh.",vi:"Chính xác! Giá điện Night Saver là €0.1954/kWh."}
  },
  {
    q:{en:"What is the peak-hours time window?",vi:"Khung giờ cao điểm là khoảng thời gian nào?"},
    options:{en:["A. 17:00–19:00","B. 12:00–14:00"],vi:["A. 17:00–19:00","B. 12:00–14:00"]},
    correct:0,
    explain:{en:"Correct! Peak hours run from 17:00 to 19:00.",vi:"Chính xác! Giờ cao điểm diễn ra từ 17:00 đến 19:00."}
  },
  {
    q:{en:"Do LED lights use significantly less energy than incandescent bulbs?",vi:"Đèn LED có tiêu thụ ít điện hơn đáng kể so với bóng đèn sợi đốt không?"},
    options:{en:["A. Yes, up to 80–90% less","B. No, they use the same amount"],vi:["A. Có, ít hơn đến 80–90%","B. Không, mức tiêu thụ như nhau"]},
    correct:0,
    explain:{en:"Correct! LEDs are highly energy-efficient.",vi:"Chính xác! Đèn LED có hiệu suất sử dụng năng lượng cao."}
  },
  {
    q:{en:"What should you check immediately after cooking?",vi:"Bạn nên kiểm tra những gì ngay sau khi nấu ăn?"},
    options:{en:["A. Cooker, hood, oven and lights","B. The weather forecast"],vi:["A. Bếp, máy hút mùi, lò nướng và đèn","B. Dự báo thời tiết"]},
    correct:0,
    explain:{en:"Correct! The kitchen safety checklist covers the cooker, hood, oven, lights and a final wipe-down.",vi:"Chính xác! Danh sách an toàn nhà bếp gồm bếp nấu, máy hút mùi, lò nướng, đèn và bước lau dọn cuối cùng."}
  },
  {
    q:{en:"How many daily eco tasks are available in the app?",vi:"Ứng dụng có bao nhiêu nhiệm vụ xanh mỗi ngày?"},
    options:{en:["A. 3 tasks","B. 10 tasks"],vi:["A. 3 nhiệm vụ","B. 10 nhiệm vụ"]},
    correct:0,
    explain:{en:"Correct! There are three daily eco tasks.",vi:"Chính xác! Ứng dụng có 3 nhiệm vụ xanh mỗi ngày."}
  },
  {
    q:{en:"What is the name of this app's main mascot?",vi:"Linh vật chính của ứng dụng tên là gì?"},
    options:{en:["A. Bé Mây (Eco Buddy)","B. Robo Spark"],vi:["A. Bé Mây (Eco Buddy)","B. Robo Spark"]},
    correct:0,
    explain:{en:"Correct! Bé Mây is your friendly eco companion.",vi:"Chính xác! Bé Mây là người bạn đồng hành thân thiện về lối sống xanh."}
  },
  {
    q:{en:"Is leaving your refrigerator door open for too long energy-efficient?",vi:"Để cửa tủ lạnh mở quá lâu có tiết kiệm điện không?"},
    options:{en:["A. No, cold air escapes","B. Yes, it cools the kitchen"],vi:["A. Không, hơi lạnh sẽ thoát ra ngoài","B. Có, vì giúp làm mát nhà bếp"]},
    correct:0,
    explain:{en:"Correct! Keeping the refrigerator door closed helps save compressor energy.",vi:"Chính xác! Đóng cửa tủ lạnh giúp giảm thời gian hoạt động của máy nén và tiết kiệm điện."}
  },
  {
    q:{en:"Where is the electricity tariff benchmark in this app based?",vi:"Ứng dụng sử dụng biểu giá điện tham chiếu ở đâu?"},
    options:{en:["A. Dublin, Ireland (SST Saver+)","B. Tokyo, Japan"],vi:["A. Dublin, Ireland (SST Saver+)","B. Tokyo, Nhật Bản"]},
    correct:0,
    explain:{en:"Correct! The tariff reference is configured for Dublin, Ireland.",vi:"Chính xác! Biểu giá tham chiếu được thiết lập theo Dublin, Ireland."}
  },
  {
    q:{en:"Can your XP and Eco Points be kept after reloading the page?",vi:"XP và Eco Points có được lưu lại sau khi tải lại trang không?"},
    options:{en:["A. Yes, using localStorage","B. No, they reset every time"],vi:["A. Có, nhờ localStorage","B. Không, mỗi lần đều bị đặt lại"]},
    correct:0,
    explain:{en:"Correct! localStorage keeps your score between page reloads on the same browser.",vi:"Chính xác! localStorage lưu điểm của bạn qua các lần tải lại trang trên cùng trình duyệt."}
  },
  {
    q:{en:"What is the reward for completing the five-step Kitchen Safety check?",vi:"Phần thưởng khi hoàn thành 5 bước kiểm tra an toàn nhà bếp là gì?"},
    options:{en:["A. +30 XP","B. +5 XP"],vi:["A. +30 XP","B. +5 XP"]},
    correct:0,
    explain:{en:"Correct! You receive +30 XP.",vi:"Chính xác! Bạn nhận được +30 XP."}
  },
  {
    q:{en:"Which rooms in a typical apartment may use the most lighting energy when lights are left on?",vi:"Những phòng nào trong căn hộ thường có thể tiêu thụ nhiều điện chiếu sáng nhất nếu để đèn bật?"},
    options:{en:["A. Living room and kitchen","B. Balcony"],vi:["A. Phòng khách và nhà bếp","B. Ban công"]},
    correct:0,
    explain:{en:"Correct! Living rooms and kitchens often have several lights and fixtures.",vi:"Chính xác! Phòng khách và nhà bếp thường có nhiều đèn và thiết bị chiếu sáng."}
  },
  {
    q:{en:"What is phantom load?",vi:"Phantom load (điện năng tiêu thụ ngầm) là gì?"},
    options:{en:["A. Energy used by appliances in standby mode","B. A power outage"],vi:["A. Điện năng thiết bị tiêu thụ khi ở chế độ chờ","B. Sự cố mất điện"]},
    correct:0,
    explain:{en:"Correct! Phantom load is the electricity used by devices while they appear to be off or are in standby mode.",vi:"Chính xác! Phantom load là điện năng thiết bị vẫn tiêu thụ dù có vẻ đã tắt hoặc đang ở chế độ chờ."}
  },
  {
    q:{en:"Does washing clothes at 30°C use less energy than washing at 60°C?",vi:"Giặt quần áo ở 30°C có tiết kiệm điện hơn so với giặt ở 60°C không?"},
    options:{en:["A. Yes, much less energy is needed to heat the water","B. No, energy use is identical"],vi:["A. Có, cần ít năng lượng hơn để làm nóng nước","B. Không, mức tiêu thụ năng lượng giống nhau"]},
    correct:0,
    explain:{en:"Correct! Lower wash temperatures reduce the energy needed to heat water.",vi:"Chính xác! Nhiệt độ giặt thấp hơn giúp giảm năng lượng cần thiết để làm nóng nước."}
  },
  {
    q:{en:"How can you set an efficient refrigerator temperature?",vi:"Nên cài đặt nhiệt độ tủ lạnh thế nào để sử dụng năng lượng hiệu quả?"},
    options:{en:["A. Fridge at 3–5°C and freezer at −18°C","B. Maximum cooling 24/7"],vi:["A. Ngăn mát 3–5°C và ngăn đông −18°C","B. Luôn đặt mức làm lạnh tối đa"]},
    correct:0,
    explain:{en:"Correct! Recommended temperatures keep food safely cold without overworking the compressor.",vi:"Chính xác! Mức nhiệt khuyến nghị giúp bảo quản thực phẩm mà không khiến máy nén phải hoạt động quá mức."}
  },
  {
    q:{en:"Is natural ventilation better than running air conditioning in mild weather?",vi:"Khi thời tiết ôn hòa, thông gió tự nhiên có tốt hơn bật điều hòa không?"},
    options:{en:["A. Yes, it avoids air-conditioning energy use","B. No"],vi:["A. Có, vì không cần dùng điện cho điều hòa","B. Không"]},
    correct:0,
    explain:{en:"Correct! Natural ventilation can keep rooms comfortable without running the AC when conditions allow.",vi:"Chính xác! Khi điều kiện phù hợp, thông gió tự nhiên giúp căn phòng dễ chịu mà không cần bật điều hòa."}
  },
  {
    q:{en:"What is the benefit of running a dishwasher with a full load?",vi:"Lợi ích của việc chạy máy rửa chén khi đã có đủ một mẻ là gì?"},
    options:{en:["A. Better water and energy efficiency per dish","B. No benefit"],vi:["A. Tiết kiệm nước và điện tính trên mỗi món","B. Không có lợi ích"]},
    correct:0,
    explain:{en:"Correct! Full loads make better use of each wash cycle.",vi:"Chính xác! Chạy máy khi đã đủ tải giúp tận dụng hiệu quả mỗi chu trình rửa."}
  },
  {
    q:{en:"Why should you unplug hair dryers or straighteners after use?",vi:"Vì sao nên rút phích cắm máy sấy tóc hoặc máy duỗi tóc sau khi dùng?"},
    options:{en:["A. For safety and to avoid standby use","B. To keep them cold"],vi:["A. Để an toàn và tránh điện tiêu thụ khi chờ","B. Để giữ thiết bị luôn lạnh"]},
    correct:0,
    explain:{en:"Correct! Unplugging heat-producing appliances reduces electrical and fire risks.",vi:"Chính xác! Rút điện các thiết bị tạo nhiệt giúp giảm rủi ro về điện và cháy."}
  },
  {
    q:{en:"How often should you check the waste collection schedule in the app calendar?",vi:"Bạn nên kiểm tra lịch thu gom rác trong ứng dụng với tần suất nào?"},
    options:{en:["A. Every Tuesday","B. Once a year"],vi:["A. Mỗi thứ Ba","B. Mỗi năm một lần"]},
    correct:0,
    explain:{en:"Correct! The app marks Tuesdays as collection days.",vi:"Chính xác! Ứng dụng đánh dấu thứ Ba là ngày thu gom rác."}
  },
  {
    q:{en:"What happens when you reach 250 XP?",vi:"Điều gì xảy ra khi bạn đạt 250 XP?"},
    options:{en:["A. Unlock Level 3: Eco Master 🌿","B. Your score resets"],vi:["A. Mở khóa Cấp 3: Eco Master 🌿","B. Điểm của bạn bị đặt lại"]},
    correct:0,
    explain:{en:"Correct! Reaching 250 XP unlocks Level 3: Eco Master.",vi:"Chính xác! Đạt 250 XP sẽ mở khóa Cấp 3: Eco Master."}
  },
  {
    q:{en:"How many flashcard tips are shown each week in the Tips tab?",vi:"Mỗi tuần có bao nhiêu mẹo dạng thẻ được hiển thị trong tab Mẹo hay?"},
    options:{en:["A. 3 curated tips","B. 50 tips"],vi:["A. 3 mẹo được chọn lọc","B. 50 mẹo"]},
    correct:0,
    explain:{en:"Correct! The app displays three rotating tips each week.",vi:"Chính xác! Ứng dụng hiển thị luân phiên 3 mẹo mỗi tuần."}
  },
  {
    q:{en:"What is the best way to defrost frozen food?",vi:"Cách tốt nhất để rã đông thực phẩm đông lạnh là gì?"},
    options:{en:["A. Move it to the fridge in advance","B. Use boiling water"],vi:["A. Chuyển thực phẩm xuống ngăn mát từ trước","B. Dùng nước sôi"]},
    correct:0,
    explain:{en:"Correct! Planning ahead and defrosting in the fridge avoids using extra energy for a quick-thaw appliance.",vi:"Chính xác! Rã đông trong ngăn mát từ trước giúp tránh phải dùng thêm điện cho thiết bị rã đông nhanh."}
  },
  {
    q:{en:"Do closed doors to unused rooms help heating and cooling efficiency?",vi:"Đóng cửa những phòng không sử dụng có giúp hệ thống sưởi và làm mát hiệu quả hơn không?"},
    options:{en:["A. Yes, it helps zone conditioned air","B. No effect"],vi:["A. Có, giúp tập trung luồng khí đã được điều hòa","B. Không có tác dụng"]},
    correct:0,
    explain:{en:"Correct! Managing rooms individually can reduce unnecessary heating or cooling.",vi:"Chính xác! Điều chỉnh việc sưởi hoặc làm mát theo từng phòng giúp tránh tiêu thụ năng lượng không cần thiết."}
  },
  {
    q:{en:"What is the main goal of Eco-Buddy Home Manager?",vi:"Mục tiêu chính của Eco-Buddy Home Manager là gì?"},
    options:{en:["A. Track tariffs and habits to save household energy","B. Play arcade games"],vi:["A. Theo dõi biểu giá, thói quen và tiết kiệm năng lượng gia đình","B. Chơi trò chơi điện tử"]},
    correct:0,
    explain:{en:"Correct! The app is designed to help manage household energy use.",vi:"Chính xác! Ứng dụng được thiết kế để hỗ trợ quản lý năng lượng trong gia đình."}
  },
  {
    q:{en:"Can LED bulbs be recycled?",vi:"Bóng đèn LED có thể được tái chế không?"},
    options:{en:["A. Yes, at suitable e-waste recycling points","B. No, put them in regular rubbish"],vi:["A. Có, tại điểm thu gom rác thải điện tử phù hợp","B. Không, bỏ vào rác sinh hoạt thông thường"]},
    correct:0,
    explain:{en:"Correct! LED bulbs should be taken to appropriate electrical or electronic waste recycling facilities.",vi:"Chính xác! Bóng đèn LED nên được đưa đến điểm thu gom và tái chế rác thải điện, điện tử phù hợp."}
  },
  {
    q:{en:"What is the purpose of the five-step kitchen safety check?",vi:"Mục đích của quy trình kiểm tra an toàn nhà bếp gồm 5 bước là gì?"},
    options:{en:["A. Prevent fire hazards and save electricity after cooking","B. Clean windows"],vi:["A. Ngăn ngừa nguy cơ cháy và tiết kiệm điện sau khi nấu","B. Lau cửa sổ"]},
    correct:0,
    explain:{en:"Correct! The check helps reduce kitchen hazards and avoid leaving appliances or lights on.",vi:"Chính xác! Quy trình này giúp giảm nguy cơ mất an toàn và tránh để thiết bị hoặc đèn hoạt động khi không cần thiết."}
  },
  {
    q:{en:"How many Eco Points do you get for rating a tip?",vi:"Bạn nhận được bao nhiêu Eco Points khi đánh giá một mẹo?"},
    options:{en:["A. +10 Eco Points","B. 0 points"],vi:["A. +10 Eco Points","B. 0 điểm"]},
    correct:0,
    explain:{en:"Correct! Rating a tip earns you +10 Eco Points.",vi:"Chính xác! Đánh giá một mẹo giúp bạn nhận được +10 Eco Points."}
  },
  {
    q:{en:"Can you customize the cooking timer?",vi:"Bạn có thể tùy chỉnh bộ hẹn giờ nấu ăn không?"},
    options:{en:["A. Yes, choose a preset or enter custom minutes","B. No"],vi:["A. Có, chọn thời gian có sẵn hoặc tự nhập số phút","B. Không"]},
    correct:0,
    explain:{en:"Correct! You can use a preset or enter your own cooking time.",vi:"Chính xác! Bạn có thể chọn thời gian cài sẵn hoặc tự nhập thời gian nấu."}
  },
  {
    q:{en:"Is daylight harvesting (using natural sunlight) effective?",vi:"Tận dụng ánh sáng ban ngày có hiệu quả không?"},
    options:{en:["A. Yes, it reduces the need for artificial lighting","B. No"],vi:["A. Có, giúp giảm nhu cầu sử dụng đèn điện","B. Không"]},
    correct:0,
    explain:{en:"Correct! Using natural daylight reduces the need for electric lighting.",vi:"Chính xác! Tận dụng ánh sáng tự nhiên giúp giảm nhu cầu bật đèn điện."}
  },
  {
    q:{en:"What color is the Night Saver badge in the app?",vi:"Huy hiệu Night Saver trong ứng dụng có màu gì?"},
    options:{en:["A. Green 🟢","B. Red 🔴"],vi:["A. Xanh lá 🟢","B. Đỏ 🔴"]},
    correct:0,
    explain:{en:"Correct! The Night Saver badge is green.",vi:"Chính xác! Huy hiệu Night Saver có màu xanh lá."}
  },
  {
    q:{en:"How do you help Bé Mây level up?",vi:"Bạn cần làm gì để giúp Bé Mây lên cấp?"},
    options:{en:["A. Complete daily tasks, quizzes and safety checks","B. Do nothing"],vi:["A. Hoàn thành nhiệm vụ hằng ngày, câu đố và kiểm tra an toàn","B. Không cần làm gì"]},
    correct:0,
    explain:{en:"Correct! Earn XP by completing activities to help Bé Mây level up.",vi:"Chính xác! Hoàn thành các hoạt động để tích lũy XP và giúp Bé Mây lên cấp."}
  }
];
