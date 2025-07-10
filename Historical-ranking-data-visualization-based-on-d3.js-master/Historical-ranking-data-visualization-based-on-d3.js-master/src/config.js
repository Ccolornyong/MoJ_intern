const config = {
  // 数据源的编码方式。
  // 默认为UTF-8。
  // 如果是国内用户，且使用旧版Execl处理数据，保存的编码很可能是GBK的，如果出现乱码则将这里改成GBK。
  // 不建议修改这里。而是建议将自己制作完毕的csv文件的内容复制到example.csv中。因为example.csv的编码格式是所有语言都支持的。
  // Encoding is not recommended to be modified.
  // Instead, it is recommended to copy the contents of the CSV file produced by yourself to example.csv.
  // The encoding format of example.csv is supported by all languages.
  encoding: "UTF-8",

  // 每个时间节点最多显示的条目数。
  max_number: 15,

  // 控制是否显示顶部附加信息文字。
  showMessage: true,

  // 时间自动排序。
  // !!!请确保打开此项时，使用的是标准日期格式！(即：YYYY-MM-DD HH:MM)
  // 如果关闭，排序顺序为csv表格的时间字段自上而下的出现顺序。
  // 如果你的日期格式为标准的日期格式，则可以无视数据排序，达到自动按照日期顺序排序的效果。
  // 开启auto_sort可以实现时间的自动补间。
  // Auto Sort by Time
  // Please ensure using standard datetime format (YYYY-MM-DD HH:MM) when this term is enabled!!!
  auto_sort: false,

  // 时间格式化
  timeFormat: "%Y-%m",

  // 倒序，使得最短的条位于最上方
  reverse: false,

  // 类型根据什么字段区分？如果是name，则关闭类型显示
  divide_by: "type",

  // 颜色根据什么字段区分？
  divide_color_by: "type",

  // 字段的值与其对应的颜色值
  // 也可在src/colors.js 中设置
  color: {
    "강원도": "#5C80BC",        // 푸른 계열
    "강원특별자치도": "#427AA1", // 진한 하늘
    "경기도": "#A05EFA",         // 연보라
    "경상남도": "#D3687A",       // 짙은 인디핑크
    "경상북도": "#F29E4C",       // 황토빛 오렌지
    "광주광역시": "#45B69C",      // 청록
    "대구광역시": "#FF6B6B",      // 고급스러운 레드
    "대전광역시": "#F7B801",      // 골드/노랑
    "부산광역시": "#3385C6",      // 푸른 바다색
    "서울특별시": "#202C59",      // 진한 네이비 (중심 느낌)
    "세종특별자치시": "#7E6B8F",  // 회보라
    "울산광역시": "#3C91E6",      // 밝은 블루
   "인천광역시": "#4ECDC4",      // 민트
    "전라남도": "#F25F5C",        // 붉은 계열
    "전라북도": "#FF924C",        // 오렌지
    "전북특별자치도": "#BC6C25",  // 시나몬 브라운
    "제주특별자치도": "#6C757D",  // 중성 회색
    "충청남도": "#59C3C3",        // 청록톤
    "충청북도": "#84A59D"         // 약간 옅은 청회색
  },


  // 指定一组颜色值，用于自定义所有bar 的配色方案。如果为空则使用默认配置。
  color_palette: [],

  // 颜色渐变：颜色绑定增长率
  changeable_color: false,

  // 添加功能：不同类型的增长率所用渐变色不同(暗→亮)
  // 如果该项为false，那么所有条目全部按照color_range变色
  // 如果该项为true，那么按照src/color_ranges.js中的color_ranges变色，默认色板为color_range
  // 一个具体的设置模板见src/_color_ranges.js，将其更名为color_ranges.js再设置即可
  divide_changeable_color_by_type: false,
  color_range: ["#ff7e5f", "#feb47b"],

  // 附加信息内容。
  // left label
  itemLabel: "1위 시도:",

  // right label
  typeLabel: "행정구역:",

  // 榜首项目信息的水平位置 。
  // Top item information horizontal location
  item_x: 250,

  // 时间点间隔时间。
  interval_time: 5,

  // 上方文字水平高度。
  text_y: -50,

  // 右侧文字横坐标
  text_x: 900,
  // 偏移量
  offset: 350,

  // 长度小于display_barInfo的bar将不显示barInfo。
  // Hide barInfo if bar is shorter than barInfo
  display_barInfo: 0,

  // 使用计数器
  // 注意！使用计时器和使用类型目前不能兼容，即不能同时开启！
  // 计数器会出现在右上角，记录着当前榜首的持续时间。
  use_counter: false,
  // 每个时间节点对于计数器的步长。
  // 比如时间节点日期的间隔可能为1周（七天），那么step的值就应该为7。
  step: 1,

  //////////////////////////////////////////////////////////////////////////////
  // 格式化数值
  // 这里控制着数值的显示位数。主要靠修改中间的数字完成，如果为1则为保留一位小数。
  // 逗号表示每隔三位数用","分割
  // '.2f' means keeping two decimals.
  format: ",.0f",

  // 后缀
  postfix: "",

  // 如果看不懂这是在干什么的话，建议不要修改这里。
  // 反格式化函数:
  // 格式化操作可能会导致NaN问题。此函数将格式化后的数值反格式化为JS可以识别的数字。
  deformat: function (val, postfix) {
    return Number(val.replace(postfix, "").replace(/\,/g, ""));
  },
  //////////////////////////////////////////////////////////////////////////////

  // 图表左右上下间距。
  // 注意，left_margin不包括左侧的label，修改数值较小会导致左侧label不显示
  left_margin: 250,
  right_margin: 150,
  top_margin: 180,
  bottom_margin: 0,

  // 是否开启时间标签。
  dateLabel_switch: true,
  // 时间标签坐标。建议x：1000 y：-50开始尝试，默认位置为x:null,y:null
  dateLabel_x: null,
  dateLabel_y: null,

  // 允许大于平均值的条消失时上浮。
  allow_up: false,

  // 所有条目上浮 - 用于反向排行榜等情况
  always_up: false,

  // 设置动画效果，如果为true，则新进入的条目从0开始。
  enter_from_0: true,

  // 如果所有数字都很大，导致拉不开差距则开启此项使得坐标原点变换为（最小值）*2-（最大值）
  big_value: true,

  // 如果要使用半对数坐标，则开启此项
  use_semilogarithmic_coordinate: false,

  // barinfo太长？也许可以试试这个
  long: false,

  // 延迟多少个时间节点开始
  wait: 0,

  // 单独控制交换动画速度倍率
  update_rate: 1,

  // 开启匀速动画效果
  // animation:'linear',
  showLabel: true,

  // label x轴位置
  labelx: -10,

  use_img: true,

  // 图片路径，本地图片或者网上图片。
  // 也可在imgs.js中配置。
  imgs: {
    "강릉시": "https://i.namu.wiki/i/wQIAxMMQvpnj9CjnxKvGeDeTla4RQjgLTnQbB7O9YvMZewJ_dpmQd_Kppip8D0P9_4hTVTRyxmM_MzCLJcgDP37hsoJfYPSiVhL14b87Vp1P4g7lI_Vo8L6ddxGRyYpT0n7AHF914Di8gcGDK3CvZA.svg",
    "고성군": "https://i.namu.wiki/i/YD616BFJcGP4-evVpOWPbE6edjB_5CARGNEDMmOCtm46s0-62h4XuJ485NanxXa51bG1Uy1FQLIv8hZQu9ps15RoofNLW0mnGdUwwI0Xq-4-w-rKczTC4ipjCGkfAkSeSPICGTyT4b20yjZXyLtFPw.svg",
    "동해시": "https://i.namu.wiki/i/8iHNQxBAs0GyhBejUboY721aSSpGC0ZJLkNzHcxQfv_5c6Y4N_xkogyvygyrEfqAOZArotMVV12gzcOmkLKackelCwq7sw3-Jwfiqgzy_B_8onK6sIRLuJb-P7d_JC0Wkgf5f7aFOiODV8gFSeH28Q.svg",
    "삼척시": "https://i.namu.wiki/i/CggWI0g__UasqWv_7-1pHJ-_v_-LGorMQkZFBKS10g7s9ZepsQLjq0FwhdcNEkf6JyXIxC9EUCps4dDHWzszHiqwFqs1IS8PNgCmPcAh-knm1PSEPKEhC7x8IN_1gLP0KJX1SK_bQzxMzm8YGqT3YQ.svg",
    "속초시": "https://i.namu.wiki/i/OYQ1k85yn4bUaQsX4SD7nQsC4pB8ajw60rJMrd9sOZSAZucsRil1N1sVvc2w5uBVIyCOTSqmVQhHEbwTSGLsCL8lE75qyDcdRQwRmF15sxiQWFc0F5EE924M4fz1jQBP8M56cNQcZAkC6KuUowqgKQ.svg",
    "양구군": "https://i.namu.wiki/i/7NUN1qgnLSXNiNFTk3K0qoIdP4E8804U3GLVbe6n9mSxmkK3-yoE4MvSWDjv2K3Ics849kIHbkrKlzMgmPl205AgHzza74DcMQ9FpCBAjR7Eqsezgiu0uFjCmG-tjZOLuwe_v-i_aP94921O9CLxew.svg",
    "영월군": "https://i.namu.wiki/i/50Yg46cQTZKN_zupMcxRZYQB1u1-MwH1k84a-2mHBeymZtFNTQlriNA-uqneh8ImxKugDg73cKDasjGGOKEL5EHi1hz0hOwXYYA2TgwJ6Uw_Wb2RGtp1lMOvWlVCpbl5yunxSuc86H8ntqeapTRQDA.svg",
    "원주시": "https://i.namu.wiki/i/CM-jpPzfoBi3Fn6qv5nQGUDufQD-deX9MeMWJ-ripMqJtzUahFE82XKjmDAJoNO2IuOWr3yN1J25No10J4ct4zGgS2ObK7oVPWROrYcrdMGO9WKMX0neEm0hTLy-m7nTMkube_oOSNgOAP8kipPctw.svg",
    "인제군": "https://i.namu.wiki/i/Z9TfhrWN27RbSrdKsda2W8c39RRhjNra_u_oSVum8xZ4SVJowXg7wdhLdB5w8DguUXyOSUh2wwtjadxUpxdekBz1BdunxQkLVWwLHES5m4ydNIF8wuFv1pbDeecaltNljp-jHo-4z9p1_Ko1tktdjA.svg",
    "정선군": "https://i.namu.wiki/i/Aj_rlBnSiMuKuOAOWZgm0uO6KO0_PxRf-63boC9JDxDcnnYn6ODL8p0a_YKkMAbCmMWVFYBuhobZmTaR2QN3dI3h85YL9k0O5-KETcTMmAxJeukeQU-cFF3zijuwq6eONX_LL7aYzjLK2r5ctXPUzA.svg",
    "철원군": "https://i.namu.wiki/i/d2QMgY0QOjs4bEUh4lmOFEI2DZGPKnJo_aMIYC-AOrqBaxJdfTrsLoLThOofbqqBUZjfrhT_QI6epm804q5lsH24FKpy3WmN8BqK0HybNxQ3-LWOn-B1KvxDIdbrvQsQS9ZmqPg8CZWiVhm76bOFfA.svg",
    "춘천시": "https://i.namu.wiki/i/RvmesszuSwtuoqi2oARpQ8awFJEyb1kEzU21At63Hs_9ZbPOce8oExn1O-3rZ7RW4w94o_M-WMlS3ysl3BKq6gW0sT2O0b3uZuKFhDswjkMktH1258e3wqDyAEuL-2jpVnhK-MTK_9SNLxD5BrNu7w.svg",
    "태백시": "https://i.namu.wiki/i/kCFbZ3yEQFRiSw4rvFhuku7-3u_ztO6iLIJ9vr0hhyhLp7h7f1nIDH84WqP6MbMHSvCJAmgeEFGcJjqfzwJfsOWu_hpr33yGdXyyKvtYKpkeG8i2xkKU7Y5BJ3PWnCbPFof8y5a-4Ad0bFaqb7D26Q.svg",
    "평창군": "https://i.namu.wiki/i/U0ln58YwseQIg6gHrkNQl9V6dDae97dYzaTxsDmZbnuY-pYlXzvagrUmvfS-wcxq6RmpfGXDtSNw3woZvURv9II2FaxL5HWefItCEZoNQbqxAxP2Vyq5b_BIlfM0FtobAnVqHYF-qJQZKTIFh0otYQ.svg",
    "홍천군": "https://i.namu.wiki/i/O_EAahgzdWBI0ldUpi2wdZM7H2_U1e3JO5w2alJJyIvVUAUgjpMsNjsgtUj-45J_pdoHX7Hy_KUPMdZ_W5VeVNBrc-kAivbKPU5vIRPv3yVSzL16a-KUnJdh_2ZMvvq8KJE1yh29Py29zEH-9E4gOg.svg",
    "화천군": "https://i.namu.wiki/i/Ggn9CwDOUDhN4lsDHryRt8Hw7L6oZLIM5upZoDAC8OQ6Qrtwjl3t4t-M5g52EM-XBjsl2eAUZ-dRTVzi5mVOuvvF6mhOH4BBw2ZYGyHwx-QCKc6Fi-gWhdvWqDLJJ7HlKFOOLGwsEWw2XBaTMYlFLQ.svg",
    "횡성군": "https://i.namu.wiki/i/3J_dOou-x3JCnbNvnVDZ5R0CnHkJiUPjGHAQgDC_-9nnnpFdPNgkw3bjL-qJT8EmvWrOhMBrfSeeGQ__ZWClfvhYjN0mJTuAJSiLndyJbN6paPHud0G9X-AKciFXCvxdcl3lm953SHuT4GK1utBXbQ.svg",
    "고양시": "https://i.namu.wiki/i/t6s4ltaUDpHCBdMOr0Ky_h_cc2bnfWRgI3ajjk5RDMIELhe6E3v8jJERCxVRDpDJs94j6hMbm2OFlGBLA3vi-FDKxudczuf0lO8wGKNyWfHp4HJopbtjweKC_nxbagffxwNBRa5HMMD_Gy3jHVZSOw.svg",
    "광명시": "https://i.namu.wiki/i/CmzT5_BCVOXJqSqJqoVjh7kBQ6A9jxm44NrwfHX9FaeoAN404Vsuo4na19FstTPkV5qY8sjYhaHyf7w6DMGebuQD7oYyXuGFqxu6zQEpQq-93HbnS40HeywpvwTzW8Aa83P1rNedom3WfyUWU2Ez6Q.svg",
    "광주시": "https://i.namu.wiki/i/B9fVI53y1aHj-Ogu1fygPu-pTsjAuOxyqhKDvKLeSqDXhmU7GypaMCD2VqsSZDdzrH0V09QshRPB8I-93OjEmdddh4DW9DZxKYRDx4nS-VLMMzhoxC3GpflcgmzvulSqccVJE-LvwYSXjERgv_Aoww.svg",
    "군포시": "https://i.namu.wiki/i/_cZVAU4uQKlchOeE3j1gNLPG7v98FnrAMfa2f76viN-pouQ73Vm0N4u_u8KJkVEJPt2zigQFyYhKaM2WLyJWysBj4cVcuns207iG7eJ6I1jLbn2ekzPZCDdKvcqbyqtQZQU1rDYHQwurRAKEJXts5A.svg",
    "김포시": "https://i.namu.wiki/i/AeZ5EMAZmXr2i7LDMKPwTjRxNMWKXBfv1JyaW-W-bJOHhgAvyoflyI88g8gfjvp-cZn8N-ECghsdn2UshtbukQFpD8PSaq4rB_heemg_LP1wYwU1ooI6qRorRNOHn1PAJucL08gAU0wgWyyG1fxIaA.svg",
    "남양주시": "https://i.namu.wiki/i/ZIuySqrr1J3P_OGlMVeoj3V05ZvZjhhpKu83qyH9DHyMs0hDiR5zh0WmLDuhHk0QHRkS66-vSjP9tbqfGj33sIL2doDV-6p0hdokR0bktfj9JWABalKnIQ7mjykIHdo5sOmHrMA_eaoyqTMq2Q-wlg.svg",
    "동두천시": "https://i.namu.wiki/i/_mxcMZIZ5y7CspWpRnsO-W0MoTa6Olj-Cx-rlPxE9QDPfh1r1m0nvx1bGL0_YrHHQt_mPuZ0GpA_B9gB43gFK3nC-SlfqSExTr0bpS_tZmdXJ-cDHp2GBGWa7G0XgyYAmzDONeKqbDgHCgQpgaeeLw.svg",
    "수원시": "https://i.namu.wiki/i/CHueYj0jAInJfo2ozQAouXolMfg8P-aLP_Q5miYcMszfaHu2lYvuIRMcwd1Ht4XBwkBK_9oyyG5Ecw80N8-ePg.svg",
    "시흥시": "https://i.namu.wiki/i/a1RjaYO2H1qpMkE-1gghZu-he6FYyCdKeM60lEJetf_ACDE1jan4bdLBbwcRWOaAR8lgakuxoQ4tUsgOxtfAAFlEgnw2V-yksmekabovLf-yvydrKsjmaKuI4k3U7pYndwDG6oGPmTCW9yksAFV94Q.svg",
    "안산시": "https://i.namu.wiki/i/TTSP7gSr2kWbK28H-uXUv3zV56zDKgJ9n1Zt6VR9-rXWj7s4khM0UMtrJ_r4luUAU2B9YhSm-EmAL64rwdFpA_JsUxwQKf4bJyK1K4TL6V5m8Is13VWr6ObGva2lUIQZQ5R4rqmjKIVOSBZQkBQ89w.svg",
    "안성시": "https://i.namu.wiki/i/fdwTmrNxN7fH-SVu28osK_7gLLgrOS1Z_teyrLSN7Njhe8j0jdcR4_7TbUfPWrskRuVcuqiFt8WdL_Rd8pUanJAlcpUm7SvBmNtriT9lQpFMyZy8Xel7fuNfC_RzbZGduFpVhU5YhjFkqEojNPMEJA.svg",
    "양주시": "https://i.namu.wiki/i/qXRJX5qoZkKe8tgFk3IlXsGm4ru34vseZ2F8veOTgEni1DbEB4xMsm1NE8EBwwGlSp2g35y12XFkHXb8oUZjIGvV2KYyslDwGF95nsmQOgeGqs3B2T1hgJqeOIwbqejsS_EWSBWkb716xUuOYqetnQ.svg",
    "양평군": "https://i.namu.wiki/i/zCJuZ9Qx15QS6l-z1N1K8ArkkIKrLwAvdbb1rwbLt2jXSPRP02w009bNS6HyBSANzrQkpidGZ5JlYQ6aK3LusIlEJPVF-iXsnYEoowKFjh0Y4vCNQn1ZCT_-OAjCigJsepWKC74v4iDGjswLARIkyQ.svg",
    "여주시": "https://i.namu.wiki/i/fu1llYjhMu_BGAJonvhR-Bv3efPcWmbDndx8yJ9et140UAzSVdUeYXnJf3CqbpKRDx7GNKwm65r1vJQg4Ew-pvT8MzrCF8qVJBHPpHBSJEmYfEzuN9yg5bczeuMTlC0-jCRH64mQnHifBVKSxCsCfw.svg",
    "연천군": "https://i.namu.wiki/i/P43zZs7RjTYvhMHsTkLp9UFb6OHgw9xLJVMx3i4ojV5eCXzStWg9pm_Vl-rdrSf2A5pPq1MbQ3QmpCIFFiYDrGpkXaSiVLufKdpMa6Oe3mAlT7NcTjL_2j14NupbnsFe1sVhdzCqW0r9Z7989QIzrA.svg",
    "오산시": "https://i.namu.wiki/i/NGA-Fbbta55BJCh71WwdvlmHpzQ967vIPGQm24ssU1O9HYDVcCJQO3iKIaHIu53umSD0JoovYwWmjpKd1Xat5JPKs6MU-iAzlheUf4dUOH_lr17uLOhIR8TG2Qu8C0JZfo0rHu9lH2Vrbayw4G-g1A.svg",
    "용인시": "https://i.namu.wiki/i/BDCcdirIvzfeLSTvUNn3PjrInLmOBvIgMiMicFEAaiAY5ZGM0RwtUomwm0Y5yupNkWID3NwRmeU2whES89D807c1zklIzlcLRD-iApFwNRjAwCC93vyCOS0-FFdCVjop3HVg8iVtxUi6Kur5Jrp9JQ.svg",
    "의정부시": "https://i.namu.wiki/i/Q5JcrHC3KfxsRdEj-4nSCQjmoBVwrPj7Dmucpdqip9dwftCrIfbNPoRHnERDt7voAuTNmRyPdaUglNRAbcKVJl00ardRHJsQFI-B43BMcWLwgfE6oQRhg9L9REhMlls2ENMNjzPt2OOaa3JoPKGZ_A.svg",
    "이천시": "https://i.namu.wiki/i/rx9qv5ftsmzFewUnedxLT2BaU9HDsoypqH1nnFedSwiHsnWIfv3I3rrNvgi1V9Vp5MNc5eAaEZG6cysI2aLrr9vxbLm3OndPx43PwXevKLIGjTc2yLOtWObvgJByzkUdYP222avJsi7ZBZQhaHPdlQ.svg",
    "파주시": "https://i.namu.wiki/i/m30MZAzIZYvN4lr9W7_oKHss7dD0b-XT5ikpng3P88CNgLhLIqbfe1oXyrAp2G4_a6wT3_PahHzArw0VSV3R0xPvgpdOGtxisFu1-CO3ifzPM2gNJg8c_SEFyg_LR8g1kfmZAJSO6EC8K1x2yPd8bw.svg",
    "평택시": "https://i.namu.wiki/i/O7XKXbo4MiCoc-OXwzpSdVKJzhAnx4PN8jdzUFW2KtUowpWLP-lXLNVnMmZdgMxOu3kyBgXqeFihe2qgYZAd3ZRQBQtygKDm7KS3DZufd6UTInuPitVJoHGFsJF8YzSo618F_XS0XOWmh0XCXz-ZUQ.svg",
    "포천시": "https://i.namu.wiki/i/l3XO-45cVWd2dEJxfkUvpZFY2wVroToF_Us_AtPSm-5Ufp7TbQFy4qf4ELYjj9V_mIQrU1sQeTDXLrDi5AM7X1jy3HVQvWJTna0fmtbuB4hX2tuUhgchUdfm9yUDPGc16faaQXOPlzHRenzJv2lpBw.svg",
    "화성시": "https://i.namu.wiki/i/DY3JmVGJv31Jsls4XA5AOj7iZ7pkxMQD8U9_vxZCIxqo7iXGCn0jH6pbp4706ozSk2qieSL1cJIHXkX6PVW9bH63RLZn36KeK8EinmXa1asVGkciRyAVcoVEgboifZbg2knpLDXYZ0p0tuuZ2mw53g.svg",
    "거제시": "https://i.namu.wiki/i/3kd8dKI-jFx9I3RYWkt9YA2BzDwOVh5U2vrxO7ZSLB7yoFXZnaqNZGelD60XXyqui0uJ5kPSGIjHwjLUZy1erQ_H-DXnw20tYE5GHyIpuCKaU-_VIrW5GfBYydLVv-Nv_8sCcDQk_iPI6pAK_J1kfw.svg",
    "거창군": "https://i.namu.wiki/i/SC1JILn87_8fnkqL21lRA3SVKTTHJtDMJ2kIDqz9gU--vewXhA7cZYfflXJjF9YQlyzSNiE-pxDc1FU8OkOAbSTL-x6X0JAx7xjzAQxix5CUnvupMdY-tzO18uzGQ5ejmlNfxf9YAlSEmmspwn7oTg.svg",
    "고성군": "https://i.namu.wiki/i/MrJl3W7yQ8ksai6ciceUz3n13cUquiJaALNYlxGiK5caVMeENjguqTciy0ByToHlmkiazLEZyKzYA-Aa1RF9fgufUxnZNJJmhwYwqk8BLUqY3fwJOEyMP1BXDvw-HB6_VrpoCfqOrP_sP2XynmQB3A.svg",
    "김해시": "https://i.namu.wiki/i/t4L3b4P7koiPCKjSq04XbDZBpTCwWKmdTdOVafvbdhrO-CxG1HHU1Jfnnkmxrz57lFIZqGiUSGXIzRJ2oMyQKT-pV9fVfYJo4g-K8kufbExb107upk8PjYxw-a31OnAfM8JtkUxafx73lUZAL_9wCg.svg",
    "남해군": "https://i.namu.wiki/i/-RK-2qvLlcBA-Xbl2UICGbRJHYUNtV7LZZ5HJYseRU8ODHHSrrdMtXlH6qel3JMFYZd0D5n27T0JeJCULpAYJ_fxRpjRmuXUXyrDD31Yw9VfHzIGbNK7Pj6HHpohxYv8VriwTsEzO29eqg9hp6sr_Q.svg",
    "밀양시": "https://i.namu.wiki/i/Lbmvaj1HSscsYQrjqCIMu05zBm-MLPvOwracJ1FdMMSJFCQeLTDKcLF_v6s8vF42m10tWtXVGUqmIVLTr97rwWGLcpc2-glcpJTjb2JCswnUFXsGAcXAufi3qG3bVzmY1gkxz4jT5a6gZHwx5LF0hA.svg",
    "사천시": "https://i.namu.wiki/i/b3gcgzt67FYl84hGbuHCyHLA8VVDWoRT3HpNdHtLPoT5tniw_TIqEBP6D1KfGaoNTczWwqd80ZmZqGWExDSJ6RR87VJvYwIc4ZD2eX8Zfc5rW12rbG3W-g_hYpn_qARqgGm5Qcqvto_uzWF8aziX8A.svg",
    "산청군": "https://i.namu.wiki/i/j2I-s6do6aI7UnmXWhwTpaU3MKn_nfoxb9HqKOwHY4-Cn_QnIFLSWlZU75MyhQHtlxjxDcU3PuZol2X5puKkQEaa_iPiHhMHyLlAqLnb3_LDy3NXWzKw2kxaS_qQ-0uBXcwvceBVLpPk5xogUQV_tw.svg",
    "의령군": "https://i.namu.wiki/i/oWQ_LPNOavLduPvmKe-KTigj-BFkHT06jElfQ_FD4xmoCy0sOnWLBwaYaQ-r8FZWJj75EEWEtrTkVsxNhrO-Io_yhvMoF3We0A4aNonoyKfFzo-ymDvvP5snUyTdeWP6fA5XJAfKJGFSBRoziCtQXQ.svg",
    "진주시": "https://i.namu.wiki/i/0ZVio6ZvxqprhkZPriJbJ5egsqss5Sev8BciMgNsGjq2iMCPFF_YXfeFtRAmMCekx2q_i8zHei2IKBECiAkuyg.svg",
    "창녕군": "https://i.namu.wiki/i/L-08nbfkwH9bWheXU2LFGl4kfLaU2VtpBfn_QHUzuvbSS27CdZW7kMDVxL-_35jCQnI3Ei6sCx_5sw7wYiegTMDqvqjLhNGCrXFvOJD6dtojJgIB25yOusra5qwJuaW7cPSuNtljTuyVNkoc2ov-1A.svg",
    "창원시": "https://i.namu.wiki/i/n5CXo46WZufIEOhDMM3_nnZdep7OwihpZL_uUpd31-Qdym096WlWxqr4Tgn1KgffNOlS-8EQv88PrSBvWi3krhkJTwZm_T9X3ypA-t03kCsMNlOojNCGaonKMLmYXQ8mknnQZjpJTRUYz-WwwbGBJg.svg",
    "통영시": "https://i.namu.wiki/i/EERfATAnxOYl2YtcdYnLXaMXZe4oMMasduOOn0KAT2ZkUtIyO0jyxDWnGGnaKsBfT7WIeqRrWR4wxk0XTLM3mM89VEW3NxvvRcWAXiHsDZSApUiwjE3P2y1dYVSCWYvJejjI1hgrV5e_R4QvtKfnMw.svg",
    "하동군": "https://i.namu.wiki/i/n49hoYgHAWRElFQLUwbDeSi0aPLm2NIDcSW8GPyM16mCUjh8Yi-BRICS7fMQoOnoSerjr2DaX0oRDeOz_gzwNaNaBT0b4PebUQgoIbFfTbOnzoAGdd8SmLuLWJBm2oc1x3XKIklK0VVpVhDL4uQmcw.svg",
    "함안군": "https://i.namu.wiki/i/pFPGWyxMgLmmhTfLDA_J0n65O_gJqLb06Cpk3BGNaBdNNlzETQtRk9VYI3uvooeiI1i4RvEk4gTNBk7ViKlci5Jed8Zrv1dIsWCvhSxzKShDegE6WoRknqvRCjHPHg1oLyIcFWZOl3Vl-3RjONzDYA.svg",
    "함양군": "https://i.namu.wiki/i/C82Ex13nVUXA6L8hhxdngZ7fo_U-n13MkyJ_0WI-5MZJpjCqYblIv__o8uCaofubA3OVuaCyXEW8e2A-ziL4ntBxqhIJsCDO82nkMfmooQ21tm9OTDMnZQSKg2Pucv12Y4Fm_fCV1fZN3r_jkjwjyQ.svg",
    "합천군": "https://i.namu.wiki/i/zuuuIeM7-mEM63kXcP7kpWbp0-myecOeB66_qASlUze7DLb9hGYUevYTlYMy_sJ6UkSjALdeDTTunAhAR8hxMBAw9gWjUz2w_3eRBvtkVBGg9II4T07R3UY7sdhgdYKyWtJxoEzpyFAnf8CSJCwp4g.svg",
    "경산시": "https://i.namu.wiki/i/O6a67BZKVYgnsSM1CLDl4tbdmGJR4F_QBz6nmFJW9DylSOrMenX_DrK2dsXtdqgGI8EhSUY58V1a1e4q5U32e2qdSEHyfIZCCb-eyNnmnqCci_zOMUPy5nHzPB90xqD6Yk-Gt-X8eJmB1xSIrYcbPg.svg",
    "경주시": "https://i.namu.wiki/i/cthO-Kr9Kd_Pa1xpjeSkh7JEehn8t75-NeePDPvXM828UwJzAbfrHCaznApAu6aa1UPgFjwnuLNtDw-jYMAYgUVmPihP5zx5Joc1mJR4ghL2Qtb-iilS1OkHyz30CczjcHWtmzsBwLGbqDLxSj1Cdw.svg",
    "고령군": "https://i.namu.wiki/i/ijLBXNrIJ-4sr7PZcM5Km12GfayMIyUbhGep2Kr9Nhdqt2Q3d_OCRji1wR_2mCuT-az1mftT7oHYjgz4MSWMxRi82zgueNidDRYs67eU_1FC2rgf-sli-gN7WTDhOMemdRwp3zNRighzn8Jq9gGHcg.svg",
    "구미시": "https://i.namu.wiki/i/Li9Vwvehy8401zXiTrKhLdEwtDSQpPraukyalRGsByWgdC869fx3S5n8tekIVQ4jCMvN2osUYGzkMqY5d02mSgmcADJ8h1IiORr4tHB53qYWEAJTG9LQAE73ZUj2Q7IRBlkP1izhcOWsPCIjxAfOYw.svg",
    "김천시": "https://i.namu.wiki/i/aF14Yamq-bLtVWh2MZrHoPi4VgtofI1XyiS7xzV3C2fJinjtz8Lt9h7tyxUqfl70AGnWiMDqMnbUQvkfhgxf2VbH4gzmFTtbPewqqKJ49PtECwFK5imYw_1Yrz5KAUtP2L84tIuu_3tlJPk_Op3vrw.svg",
    "문경시": "https://i.namu.wiki/i/ABq70d7kWcItSlOEMjQ86PTd80IvKmMJYQFL_MbkCY8MAfhhd40FVL64sC3AkPkzJeO-ZtEwWvAbjC4_QltIoyEpPMVKZJ8CQktNEyvQVpQ2ZaepTEVvqg-8_J9tqIRY1QnQvF9S19QyFBxgYQrCtQ.svg",
    "봉화군": "https://i.namu.wiki/i/uoqEjAvQi2BjFPXXvGADy_oaZhWkymxtre1xSiDvDI5RWrM0FDmZGDUchWpKjLkOqmJc6PvgYkrrWaeu21PiX6EnGgj34wsrj_X9J8Cu33PkzY9MZNgXXN2DTlXH6pyqN5BTtJFS29Dt-CflTjmjHg.svg",
    "상주시": "https://i.namu.wiki/i/hrI2tQAcvXrxxhWeocI3P1kU2ypA41nM9ArfbXBV_CtG2kzZZ9ZMU64yG0ajGkr9gEpsut3J4Y7cVleeKsaLP0Q4OTNDUMXTE8gbqv1mCm37kd8yUz0e_jRhGP3-DpOS19T6FFOwptVGLvNvy5Bc2A.svg",
    "성주군": "https://i.namu.wiki/i/uZ0GFZWK52TAeKU14N8qOzunxuSLtxISUXTPjowyCzxWKYhsThJuqkm5oVuX3QEmeL21hgHyutQYCFJsJK2zEyyqzlaNge0fCtohTVAB2enWwlbD4-9gw1RNt07N6wSbVILG_HdRm1ePmuLGnpTaVw.svg",
    "안동시": "https://i.namu.wiki/i/J34hePiMDgYZN3XGGCeqG8Ghb3tp24AwnKluQGiWfglwfsKieqJohYXKZUS8RJBdnWJ6ZPJ6lHVPl-2ur8hkpw6ZgrdR1SkbY9j07KireXPtmhNdQDYeXPX5v-VNHkSP0mjP6I85f1GDWU-bOqTFDQ.svg",
    "영덕군": "https://i.namu.wiki/i/MfDL4c2r_cV0C26rdAzV9rCrH98m98cajbJvAyqyJUPj8NnT1OrCO8vF6yNm3Oh9K2RyO968gIJmGIqgpQPMNYJwnUomqpqNldXVdZnyitj_IV-2NmoOHGRcYd7Jx-hkGWUKGUEKvq5BcHnbjRdofg.svg",
    "영양군": "https://i.namu.wiki/i/ndzfBeZSLLRaOypZUCt2ojPYRcrLxFUwqb0W_a2ZFKvS5DNOkSW7MsnBC1W6StKGM5rAjH_268FTiG4FNl8XHZXPYkNMT4qc8-EuJTAdC9MAqN0M95z5sZFW4N-QAjYHf8GduZ5-Jy8qnyvZILkgGw.svg",
    "영주시": "https://i.namu.wiki/i/3hfYrKrQPQx-tEgogkepFSXnrNAdYwucor47Rcom7sO3JpMFkdavouRo4NWPaAIzEC6c9cPQGw-fDsQRl6co0mYeohugCZl58mDKMjAewcnrseN-_QozDY9X4EHIT2m3lh-nMXSQwLEMtoRTqnn9kQ.svg",
    "영천시": "https://i.namu.wiki/i/m_iQCvDs234vDh83JFpZpR-jxleJaIIzhfDyQGgEx5Q9UXzpahMag0ZXO41xGILmZsof6Ssphz96IHGIYgxeiaotnCPCy6TsWiPlhXb5XVMU74PMwiw7WyvJnV4T1887hzgXaQK_yAUEaAPi0FfLqw.svg",
    "예천군": "https://i.namu.wiki/i/SzIsZzYAP6sTEHTvSqWV1F9GVjEtGCEaPzwf4pBcbpPi6xK2qLAWXNmHsfaDTayMAKURJ_1anrVo_B9CF2ycpJLwYsx5N8csTaqeNWMTc5UIpYjc78RkYWQJikoYchmxZnTz4nDxGUbDzbEyaewDDg.svg",
    "의성군": "https://i.namu.wiki/i/bTbVNrbYMfWM_ygp0QGKFLAMXA-e9p5Y_ypt_q2gUloGp1k7S6tFEXn4voK0R_DH0Yeb2BeMj-90G2hfeXMD0eUrWd5nd4NuZdbOMhXDtqrOyok_NsU6lPDIBvqpVrbbWVIOqiHjbmpyIl2itk2IhQ.svg",
    "청도군": "https://i.namu.wiki/i/4ihLoYXRC1UQkwuqdHfOfBBNNcIoqA0eWFYJWM6URaz5Sdq2H-UbNn5wwePmnve09PSNejRR2d9qZPWhm-pdX5wDur4YnPL3YKxHxcGotvRXzIGy9b4ys4Wx3BGGt3CPvv0Rfj_lNX3-H-kZHT1x7Q.svg",
    "청송군": "https://i.namu.wiki/i/bYkOxLcbyc94D0NbO2F9S1VPuDaZltnev3HNUpkwtYltk6BhpIR6kdhmCx2loGaA8_BCBkvlDAjG-DeweX1UpT7zPe8URzspJ-CNHeucOphdm9xPQ9-IEVOCPaHVDJcvgVg_QyGEpKRJk6yG1Mu4CA.svg",
    "칠곡군": "https://i.namu.wiki/i/_5porbs4eYM2gx2wG7ouDZ0ITUG-xFWp1jKHtzczb-39ugVVC9FigmKShWReJ135WsnVLwq1qurBabsBjb42khcWwQYcPVE4TeBY3IB0D-kaqhI7yt4HXiZ9zZlER_HkmbXYKOj_z9xxfUD7-qg-UQ.svg",
    "포항시": "https://i.namu.wiki/i/gwP8-WzbnP-2Cd692rZ7YR4SiMMcrrAzY5knzC4WFXHmlAg6W08hJhZ16WYvds3Mpqh47df6P_eRS791O2EBuv5xlLOXIXXJP2e5v3xZyJysywkCTXQQcRz-vkTiSDBBoT6gYa9sgTSurKZmz3cxYQ.svg",
    "광산구": "https://i.namu.wiki/i/1-1SkeYv592cBwL0sldT8UIAk7dt57L6xrGtJqZu65jQSCT__1vj25PcBbIezOhK-wlAzdbL5Fh_4H-A2bKsz66yFphZn6ImsTcFYw1R9bXgAQTPGJBaDB41rCI6UEYHKrLEYgEEBdNBfw2H51_dwA.svg",
    "남구": "https://i.namu.wiki/i/IGD5HHckNiuqc3uXN8DWzeCG6fqwNSQBncjk_7EkGYwQvyzrHpofEkF9MhL7aMpvHVrDLqbAfbBKvMLSGvFRFAeehwA4QDuL7GE8UqtJasEUE5iWILrZxzyWpNg2ZKVbp7uqS0qZcszE0GSQkvHb-Q.svg",
    "동구": "https://i.namu.wiki/i/0Rl2Ix54v5XVGVdo8XlF7bIII7imb6xNBfdze94LwHFOR8nYa788XwMkRY-T5rJhKkGnhaouQ0LqiuvcvjN9cjhTPBe2QjNgrVbbshyNnLgb_oHRlDKYw4wEi-jPzrvCQOeMvnQ_hpaMYRQCU8CDyA.svg",
    "북구": "https://i.namu.wiki/i/hX2fpQvd0D6E2msnX2er9a0ssdNXG2IP2AptSLZfHFh2gechuPlAbb_WvUfzbg4E6ySrK5IBH0FtN4p-zPaAi7UdtqjvndZNzzxjdteZC-_RsHx3fRNLmcKea6gDbGxdhIkryUnXlit5tBEjs6hBZQ.svg",
    "군위군": "https://i.namu.wiki/i/5jVnTepzCqUm5aGYnRT8bdAiir10dFEpofz5qEYJ2x7-k6Avvh8LiuvL7_WnXdilziLEJUBH0Lamv2UOTjUhOhW5zPuX3d-FKfwb8N2mWm18XOCZ07vXrIJ9qocosaNZJDFUaTV4QWvgcN3vt4bzHw.svg",
    "달성군": "https://i.namu.wiki/i/le4KNZn7pYRm0nIGY4G_idYYmUCYB9Mq8umfBjedvXEbWS12AbynNx0gOVqH2I3A-9yaAcPEkyDITNzbKN6twJb49zx0s8jlUiEb7IkuU1hZwr9oFL0iG_yAClXwvvWut4x5qUdf8lwf0SfdbqjZoQ.svg",
    "동구": "https://i.namu.wiki/i/Cy-ZBBR8EgUJBWS8BSAkW8X7sKeDr3k4-R2y5Iooo_2DHoWsdi9xJKnB78Y_aVFW5o-vW8l2I02_ppFGPM6evbxl9KBPFpbX5Mapz1hEQxkSgYqbmC3zghHrMPc1UyirclYGaxeKgVuEIIsDU9PMsQ.svg",
    "유성구": "https://i.namu.wiki/i/rWjjrsL6hu5EixEDeocH7-fF98pXSwAKBkIIiyrYHPrIM_Gkd4tNbCvMR7P6V20ETxB8yNla6KJhOKEYtz8VEgasjYYzhS8gTMJtSOC0WL382GJajowC85VCjeZ2J1xVQNTh1XE2o7Z8Ue-XsImnfw.svg",
    "중구": "https://i.namu.wiki/i/N2-etBjopdJ0efzFvxnp_2ojsplEJzKHx8_gGomN_rP9IPTpSvfg5Zqdv88HI7czjytV4NPkgw4x-6Wt3w-Rzju6pyGhIeNtJeZ2UkJEmTl2QKLhQZuHc1VeFzqjHfH762Px3fcj0vBsMPHCtcv4qA.svg",
    "기장군": "https://i.namu.wiki/i/08kCP4MsV8pHeMJokpIkhO4QZ7ypJ51nWaKIJZoz9uzZrbxnmhMAyu4bypRHmtN2SqiVRAVOYJytymur8oJZM2FnqQOOZZZFuFjjA4lFtY1HHxBFECaUUU45ffWXrGEprOkZvNcKUhKuXDsDlBWJng.svg",
    "강서구": "https://i.namu.wiki/i/ug5td3Mhs2ncTQJ3XjvKhrxQ2DZR2lTGyHSTvfhC_uXu6NNVjhdzifUogOS2030rop3zHtdfyLPN7fEi-oSiixeSVXlGRBnB9ZJtqzayKx5J0ZJIY4s0PJH_pQDnxSNmT0ksZxwDCC8IUMG7HnZN6w.svg",
    "송파구": "https://i.namu.wiki/i/2awAZFlEl_FZY4NnZOg3MtTncYZoqYWwMuDqQMZtDJe7iO3tmuGsMk96nB9IcXZ3pBXstLkJ48pzKjpLXevBs5Pei-sitqCwV9Fvv0IK0qDtWusYb6RTnH4YPBqlst3WtmFFpthJEQYtIcregpOnbw.svg",
    "중랑구": "https://i.namu.wiki/i/-vlS0o9bDhFRXWHwolbC18ioBC4A8RSu6op66iFJJKhXpw0RwbK6knEWauDsK2ks-Jl-ptga2GmRzMqIqfdbuRPRsVP0ap6wbHKYeoI8M3FFNtuArQ3dR031adno3tnGJzOTPtop5yl_hnQBwV9nPQ.svg",
    "세종시": "https://i.namu.wiki/i/4WB4F6W_4kupLtx3BfZBIg0oSnxQju5NWGQTuKJ8PWT9RnH8ucc-hyG-ZKZvBWfApj4aSQ7J88mr6mykMut5cfqPtRPwEs6nYyrxYScWgjYr2rdG0-ujupptye9c6RYL2kT6M1ALWPfHw6V6KdzAtw.svg",
    "서구": "https://i.namu.wiki/i/QEYSLMYpxxxRW1vHNPJ-3Uwbz8Sg13bYgnxjSKAPkSLPN5aqDoT66JLtUvXCiTJZiveCVlieOM0Yecq5okHqAe9eDs7FYZ9uXkxfOhGXhWl9TZTfaizsRiINJ4L6cGpq88hTIZbcAmVNy0gCRUcZ5Q.svg",
    "강진군": "https://i.namu.wiki/i/AwMIjERLXZ-AiSlAEXPsi2YhyNq629KbIPxOh6ANqKurSDln6uB4je55nLDxGkVVEQQCC2L_O0kRFhmreuSggJC8L55vJWyfnsN2C-izaxv6A9gAPS4-Yrm4MjNcw8khW-xXjZI6Qm0MqBjgBgiTqg.svg",
    "고흥군": "https://i.namu.wiki/i/uqgxatxgCSl9eGE5nazym-IurndaUhs9Ri5NB0ToFPP-OhDGLI609yng7JWv95ti8F9CC4GqUmHuLF4Y9uZqa9CR1NfhEZ9wd9g9ohk-6mBcMx6rtajiAL8TPIYR9_GcYuv0z7ooDG7-whfIpb9DIg.svg",
    "곡성군": "https://i.namu.wiki/i/2QO0WxDqkKK1wqeq39P5jeOBEpwvbD0V8tuaWpMpq1_pqRME5KgzK2vn2CqTQn0AKlWG5_uDyu4ZbfiefjPsduYVLa14HdoFGd3Los2Ap5wltkD16N67pbvhwJMRApPz-E5HCdkxw9yBA1hHOYGoQg.svg",
    "광양시": "https://i.namu.wiki/i/qBMTqrQSSEvCK2bWGlcan4DpnPtKFzczmpJVZCHNAcTxjlo8F0I6Ez6PwgJZxLdlJxzbCzU7HiuWkpufO2oxZyDqo7ntyCJqbNSruZHbRxHay30lH27U4_XNJyVzQ4sNlsl5NbAZPjEAMEPw7eVjCQ.svg",
    "나주시": "https://i.namu.wiki/i/8oeLaaAds1Q984FyoTCsl7nuhsC2rSzCTEVQrHzKXht-PkpR1KT2SKLWwa5oNzeZhb2YaOjq9CEIzFXeJJxF8-LI4gs8I3F_NJZkM_ocyp7wRLpNen4Q-Ggno770_xcc1Y4kHwmObtcHiSTd8lVK2A.svg",
    "담양군": "https://i.namu.wiki/i/xob9kgWL-7frPi1bWIA_EncwKlWHhoE40zLo9QZYcXVWmQR1MIzGoBNwUJEGrKIqh--bqCH5CWcIErP8G7JHpoRZndjxPeWzj4YTAwcRtf3jkgMhscHobS1-J4EHWR-odQ8KM8rqFvq7vs7hbOCsMg.svg",
    "목포시": "https://i.namu.wiki/i/p-XRxRqhm7A7ysObIrGkCmHl_ISWxmzIrJT1ZNWRgjVYjLTfWKd-FM_WqIpNEgJQmsgkda0Wa_Ai30as47_SwXNEfQ6RQ-kmll4qHldIDIZf3l1XpO4vI0xF-tfjjY0BXn7p34hn9VZGjUgqYJMq8g.svg",
    "무안군": "https://i.namu.wiki/i/sZUwSuYNjBH5PNp9EC4RBtyBu0AuIZEVLMVF95GvE5WVDDP28c4j-ni7oDO5_vydiPj-gKSl4Twxkg_O8ZhJ0pImtu82IcHOiyWNB1IB3yhBLXD8vKQNsC0yhEBR4dLUuNQnGE0lZOd-2hANLJTGUw.svg",
    "보성군": "https://i.namu.wiki/i/P0V7F5dRNR6g9ig30BMfBuqlneZvYhFSWUxrhZ9K2E0NG8IO3PkAX3IMCQg3nXpgtUk1Tg2i77QuRyr1R1-1COPAyVrR0qgB4AkuH4qchZ_nxL8fpAUXbctprQlHIySh1yQprMFJQW9m9LguVVWckw.svg",
    "순천시": "https://i.namu.wiki/i/MKJ8vS_UfJec_XR6ERX3DBbfBjTXonrbRE6TqtqMP_gAW4HstRJTAAmrq6ZfCPj4zTgLCp7njubYlgrM9NLDW7SLdRSWvxopl9CVqTQhqckGwAh_1k61sDs00HzfUpLEtCKT8BFd9baSPD_qJBbmbg.svg",
    "신안군": "https://i.namu.wiki/i/j-XKkaUct8pQfldcGeWPHeT2Bj8IybD2CvzEvrY2anlcYQ8QdAse0fKzzXfC2K0qxAEUaRpno9LXssuzmea3OP-BL4xriCcNMd2tUgzZ8UrsEzOzTPzLGRgj2NqTf7oPUCsBiwGsWQygJLe2w7v1HQ.svg",
    "여수시": "https://i.namu.wiki/i/-VbdSHI9LQ8b47cxByLb1wefgC39iduB_r-JHZjSmtKwHhTlRm4ZKrrWEZPeZz7fLmeaVt60eu_KrJTWW4vLghtPNI8wY8AghZhAkCHSnZIltEDZjAciG02UHG9e5lJKQf_T8bm9nETjpxuszmLqxw.svg",
    "영광군": "https://i.namu.wiki/i/BhZK5KlTvD1Ntd6gYSN_wuExzhQIvrKV1pqjRuW6v6YCD2f-KVgY0MlycHYUwWyvmyUD_hSgL-EqmX7Z8HDyGTdjH842EzTflI6j7VlajJxlChsUx9Idhr5IOYiOZGF6Z0U3SnCWWNQlcWhkCpxD_Q.svg",
    "영암군": "https://i.namu.wiki/i/sXCiwao9_eZOK06xVydLXDGyIX4uR5he8LIsaocwjqt0OkW7hbxQhkMoxo1xFG4sY720Te7J5QD4c5rrabsOa8rzKxTlHhSbFVF91dlo2YCqM7YRFBAoKz1EMAFQC_uGnmrO766MS-nMeLzdLiOtjQ.svg",
    "완도군": "https://i.namu.wiki/i/ZkwqqZqNWldyF_MQ6wxozyP0QAWLsowbYLtXhqNLxXrr5jCCwmA7NgjE2P8eaaFdSZX-Bsnfsfp_ju3wY0sw86xqDfgLwoVxU-UzJo5wJrck4kKz3b9lnn15HGijOscChQ3B63iCHJLQi0j1pUCubw.svg",
    "장성군": "https://i.namu.wiki/i/r-SXFoyR5ITPB_h6z5S05TP_QatrhJobYuz0aOyjxqlEEScWKmkz3zxHxzLl5XIQdXSEO-siG5cYTz65UvTiUOnO813VFGEFQdpB7fsSdyc07zUSdqOhTy0TIvFNOOQUv8Xv564m7JJ5nXrS0xYO2A.svg",
    "장흥군": "https://i.namu.wiki/i/3trf09UQzOjIqpwfKP6WLkYgnN5RWgeFqQywDVsFr-VrqxNPhEad1rtrfpnrPYuldPnEINgauqVBEqvbF8IYI7ds5o7EczsML8X3-Cr46uJPg3LjLYOnUX6u4VuXWpp4u7PyVN-a3sLWR87OZeNiaw.svg",
    "진도군": "https://i.namu.wiki/i/gf6T9L7TjAoZZUV9dWe7zegGO9IcrQFJxF7qESytuGflH3EDnn4kFCNH86_xEAF1T2HMaQk9GBBVPgWeIwTFKwgXYs-w7ItpppYSeRldgljWaJDvqaMXLLEcJB9X4mD4FU33S6i4bOJ-V_PsubwJ2A.svg",
    "함평군": "https://i.namu.wiki/i/2pMAjdYn08AJT_Etm0p9w1zaXnl5BhoQRDOF0VHpVi3YJsW8AnJPUEc6rGO01QIrMBaRz6ibjwYro6L_FnnA8vAShi6BH5EsjGWWD1XKVvJbmrXVyJyS9fTPPkadpJTSXIxGMGkkGiNRjbak7zU2xQ.svg",
    "해남군": "https://i.namu.wiki/i/mpXjPL9LjieWWDKyKFnBInkD1HTZW02KRDPHuP1KQcIH29n_Qtu2_Lrzue9LI9Htqo4J8KGUt9XuxLISDeqNBCdybywqvKkKHb2bzUl12MmtXVDyfmDsav06nJ8uRrnEtMiYikA5RKDf7MVLg84xxQ.webp",
    "화순군": "https://i.namu.wiki/i/Onc18-ttEk69EJadmjDFmfk_OHeRysX81kl20UtxkwbAHiDR9VlrvJ-MeiaFQPrbN416G99-ZqTdwofXADmK4yJE94QXryziOEMS-P70kQjfD2tMcWF7F21iSAhJ4LfbsWl4L7GIZEpB02LTLEX7vQ.svg",
    "고창군": "https://i.namu.wiki/i/BkAJJdT9BAJdbOQi9eq09_fKU4DNc56ZVpCrREYHse5cteJ1ImnmcZWT9EPeJ8-Kg1LjdLh8lXcT_NgKzED8diBWknXEz_zVA9-oSEgbIYU8k4rS8QCPPgmMDR4e2UwrNy66EYAeR0ykgrkJKB3lrA.svg",
    "군산시": "https://i.namu.wiki/i/k5GEY8JAl2QTYvoOD1qvbujtPG-IQ3dfnR0P1vbCB8UXh0MA_4_KYHSQPaqu5nWQUL4rCdxbfFiSUwH-507noazf5kfNIkiDBVzhOUWaxgFEk-bTlGwz0gi9VUqF523TPmMLHyNLILcTMnNUZ_BmIQ.svg",
    "김제시": "https://i.namu.wiki/i/STYSkIwFbG1P0f631075XErNoroKms4jJ6ZPybqna42eV6ncmJE7mTWlnkrYkiPyAehyXbJhdMpfCfylSZX5QUJnKiyUD8hTo30ZGuo3TPPAo8KckZfUY9SZgaFpqZSUTxL5rCXZPXsGHc8dtTwgWA.svg",
    "남원시": "https://i.namu.wiki/i/NmXvF_uc-Ux1wqSPHgtGDSZBSuTnKHbJgNhmd-eeeHi61P-G9QTXWYYP41hcr4vEUqdm8ktApDssQkMZSTR80wcuSkr3h2aBKnEQwmsr----6RZ13i7UoounLGdaBIlVDcj7o_Ccky_rHFD2nLMP0g.svg",
    "무주군": "https://i.namu.wiki/i/_AOKwyHBBesdP7ds4e0p83huKUfVoJkeHfwPK7-vg0wcCER5y61uHTrV3MYgZ_h2WClQUxdl89pJ19uwrkNshNatLXDu0HX9K6xkFQOUlcFJvRnWoeDuSBB8FNLHn-XhJB6KwNNWQ8_DpTsTF8Q1tQ.svg",
    "부안군": "https://i.namu.wiki/i/gZF4yYPlCqSqQx6dscW-X82Aur6kV7XQsyyznE5-5ks9i-b48ro7Wwf2M15KmQCO3KfFdXx62PJTWcGW6HbtgC24OsDahBr7d6GWs3z2Ibt3-C4OrK07lYCv16jSB8DbZvJeqy3qiE5xBAlZ-_MJsg.svg",
    "순창군": "https://i.namu.wiki/i/oeEbDkdQDas9tSad_qEaqRY99_MB8yIm1ZnJCF0cbVJ1a_cN4QH4Wnaqxx8JOOb1hHsSlBaoosjZL0BQWeylOlLtYd_SRtldG6ykwlXwspz-JwJCAxqgvK-SWsIM07hQ0nW2v1qheAgVGnQ_aqSqfw.svg",
    "완주군": "https://i.namu.wiki/i/4036-Hislk3N9k8xvdI8jBy7Np1Mbo82T-1scEThbRUbe8RiDfNs_jmfb30GRCLiZjtZSq0IYlADhrFYofoLB-y03DZQ6DDXX_3mEYA73RIJ8fqOif1CFGWoP54Jp6CbuPsgNDAWeFS_fdXsB0zDSg.svg",
    "익산시": "https://i.namu.wiki/i/V71WVDnbkZT14m3VD2lalmsBVrvNMnbD-v95unnWJ6jZjkngijzHVULceN3cybf4YB3tvwAwXQWXBJIO3tSSBemWkZDW6R0L42BlfBVQwYO1DN8j4pdX8AK23mpn1n-5gCC_NrK-4yWPAyikFHtHAQ.svg",
    "임실군": "https://i.namu.wiki/i/7SUIHM7OY_iRaRNa-y06fwCV4cs9MUaUmxyM55ErD8KPjart3s-Hs_QdjJbOkBgeZj6vbyiedh9gMdXJEgjT8qt2Z9oJsgBFWfOTTFcBVq05DUkrBhYacb84dfVnK33WpJrgf76d0CUGpv-gnaaO1Q.svg",
    "장수군": "https://i.namu.wiki/i/LCPk6ToiQrE4B4k8p-g7odHG99lq-vlRzB2fp9rLmXxZnN0Nr652Oop3rq-0pi7_NrPwSUaGl9nJ3jo3kdfTojJQZn4XWzKyAKzc_eeAwpeegN664v4KBip39OaHmpEdkFrSD9IIe9dnFwWlGJC-6Q.svg",
    "전주시": "https://i.namu.wiki/i/DVtBnOLSaNZaM_RlBuHpkwIYfJ-XCS7SaTph6DyfW-QM3DJV56TY7aeg4R8_MeeifUZQxU6N-ZA4xXYhCC3Bip5XrJ-rbn-ATOpen4_qKQeX9gveELAax4lur_7Zzyi1TROu9QHdvXFye6viqwAkPg.svg",
    "정읍시": "https://i.namu.wiki/i/ZP0IHdWM9_kvRrcF4_ix__YYhb6yvBCCzCKyCN0CU_doFKu99amUZb11qjohR5GeoShOFD-o0NNNxc0Nr6TbJJUV0Vi5Jp_sWjgrbJOLbLXOI1ERbBWCh3gPGIPCJAZlPlnIvO5c9sMEoLTXdFfSxQ.svg",
    "진안군": "https://i.namu.wiki/i/PAe_tL_x7r85RsPaZxRKKbtdg5jHFZDiFt8lOKFh6BUPRtGFyGMkAXfkX69zGY51I55RLg34LDXPgYUW3m8qKph-OcV05UHtY25vxtNbSQFQqgX736BpbvOicv3imprP3ej-FQsQsgkHsUAIO0mEsA.svg",
    "서귀포시": "https://i.namu.wiki/i/ru-00AADGLdE4yUzczZUfAWjLjgWbAcigruvIVcHykGTQ1aWU6wucvx7e06P0b7GE-Gxj4MgRsaCfH75ztDRSd877qAkDVqdxk8q5oqY6MlP3cTtK2D88pJBVo1OOUeyzkWO-b-Bno1O86WBz8N-pQ.svg",
    "제주시": "https://i.namu.wiki/i/vDF_5qh-oOX2v3hVLyI3vGN2Z1s7N9lRFViDx0IvEM_LS6kTd3H_DAFxpfV0wcvgiVJR2Y7bjcenMC4eVDBk-LVE3gUphRKnN98nSkESI-YcehwjNBtluuSi2eOMf_9fowAeNfU7GefOmphmQ3GnjQ.svg",
    "공주시": "https://i.namu.wiki/i/Vv4RWiXnthS1YI2tZHpcME9-0ydeiY26auWGdTjuJ8hsEcK2qEllkuiTAO7GoNooFHk_tArpqmXr5VBt2Ur5XTplalNj8g75vN3yhnn9wQpC7BVccxF89F8QrKn-Tvz3WhI_h3uvCPmkKYjXvjCbsg.svg",
    "금산군": "https://i.namu.wiki/i/k1E6P5W-fK9YjRMwOp2RcpucVnTzRyNMz5LM7YevS0qrRVNmFU37a-tHnb6kqMMGyCPadAOS7AaQ7ZBj9xcJgI9vI9zARXYvucD2TP-Jwq0HgPDNQiJWXSMJsQAnFX9y6jCgUJ7LcrXu9yRMhQS9CQ.svg",
    "논산시": "https://i.namu.wiki/i/x8VyCmAolg2dsbL5VHr4wJCvZQ6q-IYuBRSiyxeLfhNzwFaLTtkT6_-2W2eHIu57qJKVLyLGNV3Ad1vv3qDriqwi4OseuZNAMsCZoCWw3lAFyz4rkjnlQ-xxqV-4QOPkBOdOiSi8E2ijGjjt1bISpg.svg",
    "당진시": "https://i.namu.wiki/i/K-L8iNDLKvgUWaQY4tolAFmwEUVndYnS8ZD6iEbmCNEibBoTUuMge6yfSelTNmc3U0POCU6etXmp3ycG0K2VLzxMeB86GI5V88eECrQYXmw7gaYuY_qocmBtOytIYvk6gfOi9NajgoNYcTfoa0jEaA.svg",
    "보령시": "https://i.namu.wiki/i/zJXVmmZHlT4yQgq1Bd--VZtE1HRGCoh4N-UBYP2jktCFAB-F64JnvFDptzggzTmQ9R8SmuodZE4qdrc5dQp3rJS3MwATvDlyvqp-31teZDDPeDBJH9eTEJs9UbnHYu8xR38-ETd5yNSPDc6QLx98Bg.svg",
    "부여군": "https://i.namu.wiki/i/mAopoDKkvaejRudv1pOixttVMghchptXeYjBPiaSsHtgVSzhf4COuBTBB_E4KNaswWXtw_0koFIc_J-1nEiGXYx2SrHmXJP66XdfMzLNNoegC91v7-O1NEyQtYLkXJfAWbQu2OQ827Ln_xknm0EuGw.svg",
    "서산시": "https://i.namu.wiki/i/6HC6n0CbLgE_dKzKm_2vV0ziTd9RuNsul_kCqM3_hbz6sAOx9ZeVNTMGFQXYN9A3t1ttNqv-jZEpwHKY9Cowc4TDbk5IIV8FcKjSZ_dFMge1wm6I0-KX0OejuS7zkegXDhC_NJrzorG-lwwM7Z40yg.svg",
    "서천군": "https://i.namu.wiki/i/R5lvkvSWGEyepfPll-NJW_1G2fkHzaYVMh44YXhALYYeXj6QMXT0bYUPq7DrX_ResSnVT6QHmBUXMXPhEyZGISLqNAynVWbAN-BQqGkiE11Z2Hm_xp820BXS8KUnEuVtbMx0zQRIF9r98LpkOLAxow.svg",
    "아산시": "https://i.namu.wiki/i/IwvF2UN0gc8OYqMfJV98qH7iuH-WSQH_HQeEuFXxBwdLNrbFC-egIvVvFeP82BL69XPeH9lt_0rTapVb61dt9X5QM-ahXFaoQVczOKjcIQJyAdK-_DZMd_Z6w16WNs3vN30FTrFd3PP0Jn5TpaNABw.svg",
    "예산군": "https://i.namu.wiki/i/UxogT6E-2MYJYwF6cTCc9SvMm7tPWlgtiUe1-juQuDeZ-DxAc5dekcVahEXaN21FpKnVBPgpUUELMM9HN8keT_XC1tP2fLoQqppAh_hV6mFHLnUi9hzhOs1kcxP6-bYFQrr-Nm4jgVR6i9AIV3H3OA.svg",
    "천안시": "https://i.namu.wiki/i/vguXOgedVpxdXdn3FIVFmWVMy5jE_k-5yB6xHg6bzEZ_ic_0WF5VkHPKxw_9SNhBGqETiWDfcO7lquQC-wOPRJHaxwK75xNyaJiYa3ALSpQIMOXEpxFAx8K_cxFFUHWN95gl9eLd1uOHsbXlAA-kpw.svg",
    "청양군": "https://i.namu.wiki/i/9gJybAEd5LJTZDMrNtm-eLd9alctMAvtiyb0p4JKwsALhpTIwqQy9bR7KVhMtv7MUnEkUyn2d4WjR9FT2PyMiZdLNZII5Ep_gKT5AO8zDZ7M1ZjZsoZfUlfkPbqpAMyWQVwOxYxc55o1rmDpyM1Ajw.svg",
    "태안군": "https://i.namu.wiki/i/oGRylaE-GIDd8zxmg0MrasoPnGKUcmJrK-MV2NmG7o1ybs6rB7-Y9lUMbYZHs-f0mqbLm5WJOH3_FG9EYtP9pQK5Zcmi3vjXJA-6qz-QTAITaduoqJaRJKSsNlJ4gG3kBNE9ogQT8EvuyghRV4KP5g.svg",
    "홍성군": "https://i.namu.wiki/i/NKPufQ620VPQjU0f8JtKimAdJPCLIWK3u2cb4ar6lzW7g05DGQewqj5iD2Ydg8ELqBRvYaru5Fwa1ZlI40iLLL4WATk-uKYu3uLDHEU5f7vZxT07wH05Lb_xuICWjCbLU4Uqnyy7TSD0LRAAOqMEug.svg",
    "괴산군": "https://i.namu.wiki/i/5-KwFk3yCZ7SgGgvCH0_gEasFSRypW-wHL0eG944Y9HwceWKTikdwF2kcUxiqEGw8XtTUxYCEEoXQiEoq2SzGZBLvEp9Y7yDxhKq65K_Gdfv_-FYi4FI3EsnkXhiHQtuZDTKExilMT4ithPt7g9mgA.svg",
    "단양군": "https://i.namu.wiki/i/Rd4n0Pc_ux0PSgNHJt-b2S0ZtZZ5orusXMUzcwB1JGqVUUEqkX4-5qC11iPiB1gQJUutW8vEvkYOIpDjtZD7vgfjSc34Y3-zCcHVD-rcJPwatNmzI72dD_Uj5E9G5VwscVZEVtBR6Wp2-tHXOU3g8w.svg",
    "보은군": "https://i.namu.wiki/i/nO02KDjTc6Az0bibMENyVSSxbDn789CYI6OsQKZHCPYmi_RxOd2d5F_LMGnEMSQVg-xLdj6ApN4adKZ0R-iB_CKqlb-1nppoOdrW9mmvvE0rSvHdFQ0PdlwjVWi7ke7B_L4FoDB7pmmC9--I_oWtnQ.svg",
    "영동군": "https://i.namu.wiki/i/Uz2PJhZbFXE7xhvuSQbq7ptwJ_vg858KLLVN2DgmFzQ_dnifOwBT6w4GpeUlPmYV0wjFayLCdTGTghICz5mG-DbriDzGvrnMtlHnfjdLmbiT4MxKGTlD9f_m3ocKAoolScF3A3w5LLtrSAqBU2RcqQ.svg",
    "옥천군": "https://i.namu.wiki/i/NpEzF9eROMZqCilNqNpCoyY0QBY6461r6iYYzxfNb53l6qSADeqEStivwagjf_hCY6YurFgnuWILs0UsLh-yCIfekDMLWyurnZxahfuNnAUNVlDHttGRfOY9bWFMys_Yd1l4Xp5-BdAneDXWxCPnUg.svg",
    "음성군": "https://i.namu.wiki/i/QeAJDG3Xp-J26gvmhPnwka-SHSDcV3gPuowBoes3W-UyTGdK1deyWg7xxc3iIppMePRk-v3zVUZcMRm1bXKTBZ0DvuDvJFYXdYPg1XTogwMKWsjFZKyBCS2TnGLFfkvb4MvmPmrZLaWOWeS1nj_SxQ.svg",
    "제천시": "https://i.namu.wiki/i/oyUz3MhpU_zV-5dYjo_rEtXe_INUW1OGkGLduX2QAReMHnzo7dxVb4pDXOpcJLOuRCF27OlmFniZeCC74cWEffPR5zDoVFlb4Lr0-XdoF8MwoEQUrB_Y3oniK1gKJFoKN7ctf8Y_brFtgklJs27fHA.svg",
    "증평군": "https://i.namu.wiki/i/mDXco6ZNmit95Y_5ZjRXaeJsdKQDpfi0p7rWMtDg5jSxpVbp3rifso5x2LupRABV-JbJyO9hVPEgpVNClC8ADe9L2zeCUHVMN69FlXrevL-jb5ZjP7GkjuQDUA0sAr-Afg82UH8caHPWDYDllGPPxA.svg",
    "진천군": "https://i.namu.wiki/i/CSX6j8T4hNGJiGEAEBgqktxjjTaZWAqoy-w7KZe7UfV8u6ckNTBpXjOJMzol7Wcc5yj-kdWAYPJFokn7sQesynn7Kokeen0J-DGx230aqwAGXDBl0akDvB7gYFoBVlZ1qZPlwM-qmGczQyiqNIGmZQ.svg",
    "청주시": "https://i.namu.wiki/i/aO6qNBUM61ALf0iOvKWgPwsEA517SrkNLNl306sEblP1Zn8fJTV38XGpokA3hbiGtlCf96XxMauBcl1g1iIzkfZeYrWaHuXv_-50THh4YRKafwagPwJRuAeV2qH_zeidEevaaWTq2xiudae1W6EiIw.svg",
    "충주시": "https://i.namu.wiki/i/jg9gIKssEVuxGtPWrxO41WK9PYW6G3dk5gbJDASx11HrYOvw0UbT-9BAiXyXTzJ8yDBHeRCz7Wd2uvarr_kjrC9tREAwtrKPtC0wlU-XFx7EZzcntQqcFKPIZqVCDrQkTrvkvLH3eqD2-p38XnP-qA.svg",
  },


  // 全局背景颜色
  background_color: "#FFFFFF",

  // 矩形柱是否为圆角矩形
  rounded_rectangle: true,

  // 是否显示x轴轴线
  show_x_tick: true,

  // 限制bar info 展示的长度
  // limit bar info display length
  bar_name_max: 30
};