// 医院信息页数据
function hospital_info(){
    // 医院名字 格式必须为“XXX医院”
    var name = "ABC医院";

    // 医院介绍信息
    var info = " "+" "+"商丘市第一人民医院是商丘市唯一一所三级甲等综合医院，其前身为加拿大圣公会于1912年创办的圣保罗医院。1951年9月医院由人民政府接管，先后称为商丘专区人民医院、商丘地区人民医院。1997年商丘撤地建市，1998年6月医院更名为商丘市第一人民医院。";
    return [name,info];
}


// 员工信息页数据
function staffInfo(){
    // 员工信息集合，key为姓名，value为职位
    // 修改完该信息后，需要同时修改下方staffInfo函数中的数据
    var staff_info = new Map([
        ['张三','院长'],
        ['李四','内科主任'],
        ['王五','外科主任'],
        ['赵六','口腔科主任'],
        ['林一','儿科主任'],
        ['李二','妇科主任'],
        ['赵四','骨科主任'],
        ['孙六','皮肤科主任'],
        ['田七','消化科主任'],
        ['刘九','内科'],
        ['闫十','儿科']
    ])
    return staff_info;
}
function staffPhoto(){
    // 数组内是员工证件照的文件地址
    var staff_photo_src_arr = [
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
        "./img/staff_photo1.png",
    ]
    return staff_photo_src_arr; 
}


// 部门管理页所用信息
function getDepName(){
    var staff_info_map = staffInfo();
    var dep_name_set = new Set();

    for(var [key, value] of staff_info_map){
        var dep_name = value;
        var sub_to = dep_name.indexOf("科");
        var need_to_add = dep_name.substring(0,sub_to+1);
        dep_name_set.add(need_to_add);
        if(need_to_add.length == 0){
            dep_name_set.delete(need_to_add);
        }
    }
    // 返回部门名称无重复的Set集合
    return dep_name_set;
}
function getSpeDepStaff(depName){ // 获取指定部门的人员数据
    // depName：科室名
    let staff_info_map = staffInfo();
    var res_map = new Map();
    for(var [key, value] of staff_info_map){
        var dep_name = value;
        var sub_to = dep_name.indexOf("科");
        var need_compare_with = dep_name.substring(0,sub_to+1);
        if(need_compare_with == depName){
            res_map.set(key,value);
        }
    }
    return res_map;
}


// 生成挂号单号
var checkTime = function (i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}
function getTimeNum() {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["07", "01", "02", "03", "04", "05", "06"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds(),
        month = checkTime(month),
        h = checkTime(h),
        m = checkTime(m),
        s = checkTime(s);
        return year +"1"+ month  + date  + week[day]  + h  + m  + s;
}
function getNowTime() {
    var nowdate = new Date();
    var year = nowdate.getFullYear(),
        month = nowdate.getMonth() + 1,
        date = nowdate.getDate(),
        day = nowdate.getDay(),
        week = ["07", "01", "02", "03", "04", "05", "06"],
        h = nowdate.getHours(),
        m = nowdate.getMinutes(),
        s = nowdate.getSeconds(),
        month = checkTime(month),
        h = checkTime(h),
        m = checkTime(m),
        s = checkTime(s);
        return year +"年"+ month + "月" + date + "日";
}



    window.patient_info = new Array();
        // 就诊日期     挂号单号           姓名    出生日期  电话       就诊类型 科室 接诊医生 收费状态
        patient_info[0] = new Array("2023-02-12","20231021207194631","张三",23,"13622224839","初诊","内科","李四","诊疗费(50.00元)");
        patient_info[1] = new Array("2023-02-14","20231021402152355","钱万里",58,"13642485863","复诊","骨科","赵四","免诊疗费(0.00元)");
        patient_info[2] = new Array("2023-02-14","20231021402163156","赵启和",44,"13928478184","初诊","消化科","田七","诊疗费(50.00元)");
        patient_info[3] = new Array("2023-02-15","20231021503173222","李琦余",30,"13828348422","初诊","妇科","李二","诊疗费(50.00元)");


function getPatientInfo(){
    return patient_info;
}
function addPatientInfo(place,date,num,patient_name,age,phone,type,department,doctor,charge_status){
    patient_info[place] = new Array(date,num,patient_name,age,phone,type,department,doctor,charge_status);
}



window.ward_num_arr = new Array();
    // 病房号
    ward_num_arr.push(1001);
    ward_num_arr.push(1002);
    ward_num_arr.push(1003);
    ward_num_arr.push(1004);
    ward_num_arr.push(2001);
    ward_num_arr.push(2002);
    ward_num_arr.push(2003);
    ward_num_arr.push(2004);
// 病房管理页数据
function getWardNumArr(){
    // 病房号集合
    return window.ward_num_arr;
}
function getWardNumIndex(ward_num){
    // 获取病房号的索引
    var res;
    for(var i = 0; i < ward_num_arr.length; i++){
        if(ward_num_arr[i] == ward_num){
            res = i;
            break;
        }
    }
    return res;
}
function getSpeWardPatientInfo(wardIndex){
    // 获取指定病房的病人姓名
    var allPatientInfo = new Array();
    for(let i = 0; i < 8; i++){
        allPatientInfo[i] = new Array("李进"+i,"林宽"+i,"王莹"+i,"赵玲"+i);
    }    
    return allPatientInfo[wardIndex];
}
// 名医信息
function getFamousDocInfo(){
    let doc_info_arr = new Array();
    //证件照  姓名  个人专长  个人简介  临床与教学科研成果  学习经历
    doc_info_arr[0] = new Array("./img/staff_photo1.png","张亦声","中医外感病",
    "张亦声是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    doc_info_arr[1] = new Array("./img/staff_photo1.png","李亦声","中医内伤病",
    "李亦声是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    doc_info_arr[2] = new Array("./img/staff_photo1.png","王怡然","中医皮肤病",
    "王怡然是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    doc_info_arr[3] = new Array("./img/staff_photo1.png","田和登","中医外感病",
    "田和登是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    doc_info_arr[4] = new Array("./img/staff_photo1.png","李申意","中医外感病",
    "李申意是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    doc_info_arr[5] = new Array("./img/staff_photo1.png","赵如也","中医外感病",
    "赵如也是我院资深中医，从事中医临床、教学和科研工作30余年，XX大学教授，"
    +"师从XXX医生，多次荣获XXX奖","撰写论文40余篇，专著3部，完成多项国家自然基金研究，获XX市科技进步二等奖2项"
    ,"XXXX年~XXXX年：XX小学，XXXX年~XXXX年：XX中学，XXXX年~XXXX年：XX大学");
    return doc_info_arr;
}

function getProjInfo(){
    let proj_info_arr = new Array();
    proj_info_arr[0] = new Array("中医感染性疾病基础研究","中医感染性疾病基础研究XX市重点实验室于2014年6月获XX市科委批准，依托单位为XX市中医研究所，共建单位是XX大学附属XX医院，实验室负责人XX教授。实验室是国家中医药管理局“十一五”重点专科、“十二五”重点专科和重点学科建设单位");
    proj_info_arr[1] = new Array("银屑病中医临床基础研究","银屑病中医临床基础研究XX市重点实验室于2015年6月获XX市科委批准挂牌。依托单位为XX市中医研究所，共建单位是XX大学附属XX医院");
    proj_info_arr[2] = new Array("针灸神经调控","针灸神经调控XX市重点实验室于XXXX年XX月获XX市科委批准，依托单位为XX大学附属XX中医医院，共建单位是XX市中医研究所。实验室负责人XX主任。");
    return proj_info_arr;
}

function getFamsDocProjs(){
    let fams_doc_proj_arr = new Array();
    fams_doc_proj_arr[0] = new Array("名医治疗思路与中医临床实践","本研究旨在通过对名医治疗思路的研究和总结，探讨其在中医临床实践中的应用和价值，以期为中医临床治疗提供新的思路和方法。");
    fams_doc_proj_arr[1] = new Array("名医药物运用的经验与现代研究","本研究旨在通过对名医药物运用的经验的研究和总结，挖掘其药物的疗效机制和药性特点，并结合现代医学的研究手段，探索中药的药理作用和药效成分，以期为中药的临床应用提供更多的科学依据。");
    fams_doc_proj_arr[2] = new Array("名医针灸治疗的经验与现代研究","本研究旨在通过对名医针灸治疗的经验的研究和总结，挖掘其针灸技术的精髓和特点，并结合现代医学的研究手段，探索针灸的生理作用和治疗机制，以期为针灸治疗的临床应用提供更多的科学依据。");
    return fams_doc_proj_arr;
}

function getFamsDocNote(){
    let fams_doc_note = new Array();
    // 病名  病情描述  诊断分析  治疗方案  处方  治疗过程  治疗效果  随访情况  分析
    fams_doc_note[0] = new Array("失眠"
    ,"患者男性，年龄45岁，因工作压力过大和生活不规律导致失眠症状。患者每晚入睡困难，易醒，早醒，持续时间超过2周。"
    ,"中医认为失眠症状与肝郁气滞、心神不宁、脾虚湿困等有关。此患者因工作压力过大，肝气郁滞，导致心神不宁，难以入睡。同时，生活不规律，饮食不当，脾虚湿困，导致睡眠质量下降。"
    ,"以“平肝息风，养心安神，健脾化湿”的原则治疗。"
    ,"柴胡、龙骨、牡蛎、茯苓、泽泻、五味子、枸杞子。"
    ,"将上述药材研成细末，加水煎煮，每日分2次服用，每次服用半剂量，连续服用1周。"
    ,"患者服药后，每晚入睡时间逐渐缩短，醒来次数减少，睡眠质量明显改善，连续服用1周后症状完全消失。"
    ,"患者随访3个月，未再出现失眠症状。"
    ,"此方药以柴胡为主药，具有疏肝解郁、平肝息风的作用，可以缓解肝气郁滞、心神不宁等症状。同时，牡蛎、龙骨、五味子等药物具有安神、益肾的作用，可以养心安神，改善睡眠质量；茯苓、泽泻等药物则具有健脾化湿、利水消肿的作用，可以改善脾虚湿困所导致的失眠症状。综合而言，此方药的组合非常合理，医案疗效显著，且药物组成安全无副作用。需要注意的是，中医治疗失眠应根据患者的具体情况进行个体化治疗，以达到最佳疗效。同时，改善生活习惯，保持规律作息，避免熬夜、大量饮酒等不良习惯，也是预防和治疗失眠的重要措施。");
    fams_doc_note[1] = new Array("慢性胃炎"
    ,"患者女性，年龄37岁，因饮食不规律、生活压力大等原因，出现胃痛、恶心、纳差、便秘等症状，就诊于中医门诊。"
    ,"中医认为慢性胃炎是由于脾胃虚弱、内外伤食、情志不畅等因素引起的。此患者因生活压力大、饮食不规律，导致脾胃功能失调，气滞化热，脾虚湿困，内伤食道胃肠，因而出现胃痛、恶心、纳差、便秘等症状。"
    ,"以“健脾胃、消食导滞、清热解毒”的原则治疗。"
    ,"黄连、黄芩、枳壳、陈皮、白术、山楂、泽泻、茯苓、生姜、甘草。"
    ,"将上述药材研成细末，加水煎煮，每日分2次服用，每次服用半剂量，连续服用1周。"
    ,"患者服药后，胃痛、恶心、纳差等症状明显减轻，便秘症状得到明显改善，连续服用1周后症状基本消失。"
    ,"患者随访3个月，未再出现胃痛、恶心、纳差、便秘等症状。"
    ,"此方药以黄连、黄芩、枳壳为主药，具有清热解毒、消食导滞的作用，可以缓解胃肠道的炎症和积滞现象。同时，茯苓、泽泻等药物具有健脾化湿、利水消肿的作用，可以改善脾虚湿困所导致的胃肠道症状；白术则具有健脾运化、益气固表的作用，可以增强脾胃功能。综合而言，此方药的组合非常合理，医案疗效显著，且药物组成安全无副作用。需要注意的是，中医治疗慢性胃炎应根据患者的具体情况进行个体化治疗，以达到最佳疗效。同时，改善饮食习惯，减轻生活压力，避免过度劳累、情绪波动等因素的影响，也是预防和治疗慢性胃炎的重要措施。");
    fams_doc_note[2] = new Array("痛风"
    ,"患者男性，年龄50岁，因关节疼痛、肿胀、红肿等症状就诊于中医门诊，经检查诊断为痛风。"
    ,"中医认为痛风是由于气血凝滞、湿热内蕴、痰浊阻滞等因素引起的。此患者因饮食过度偏重、情志不畅，导致气血凝滞，湿热内蕴，痰浊阻滞，因而出现关节疼痛、肿胀、红肿等症状。"
    ,"以“祛风化湿、活血化瘀、清热解毒”的原则治疗。"
    ,"桑叶、独活、川芎、白术、泽泻、车前子、金银花、黄连、黄芩、甘草。"
    ,"将上述药材研成细末，加水煎煮，每日分2次服用，每次服用半剂量，连续服用10天。"
    ,"患者服药后，关节疼痛、肿胀、红肿等症状明显减轻，关节活动度逐渐恢复。连续服用10天后，患者症状基本消失。"
    ,"患者随访3个月，未再出现关节疼痛、肿胀、红肿等症状。"
    ,"此方药以桑叶、独活、川芎为主药，具有祛风活血、化湿化瘀的作用，可以改善痛风症状和预防痛风发作。同时，泽泻、车前子等药物具有利水消肿、清热解毒的作用，可以调节体内水分代谢，排出体内毒素。白术、黄连、黄芩、甘草等药物则具有健脾化湿、清热解毒、调和药性的作用，可以增强体质，调整体内环境，以达到治疗痛风的目的。综合而言，此方药的组合非常合理，医案疗效显著，且药物组成安全无副作用。需要注意的是，中医治疗痛风应根据患者的具体情况进行个体化治疗，以达到最佳疗效。同时，改善饮食习惯，避免高嘌呤食物、过度进补、饮酒等因素的影响，也是预防和治疗痛风的重要措施。另外，加强体育锻炼，保持适当体重，也有助于预防和治疗痛风。");
    return fams_doc_note;
}


function getContentInfo(){
    var content_arr = new Array();
    // 名 内容 用户名 时间
    content_arr[0] = new Array("感谢医生"
    ,"本人2022年12月31日在武汉出差因脑梗死倒地不醒，被路人打120送往出现市中心医院抢救，二天二夜方醒来，自肚子以下瘫痪。住了九天院，自己要求出院，在承诺书上签名后获许出院。回家后放弃了所有西药，自己每天自诊，开方子让女儿抓药，帮我熬药，经大半年的中医药治疗，成功的重新站了起来，肢体运动功能恢复如常。"
    ,"用户1586"
    ,"2023-03-20");
    content_arr[1] = new Array("痘痘终于没了"
    ,"从初二开始脸上冒出了痘痘，刚开始全世界的人都说小事情，到了年纪自然就好了，尤其是我父亲一直保持着这个态度。到初三的时候特别严重，两颊和下巴两边经常长大颗大颗的红色痘痘，我用手抠还会流脓，后来我去买过药来擦，刚开始疗效还不错，痘痘几乎都消下去了，但是一定程度之后就没啥效果，之后也没怎么管了。后来脸上只是有很多痘印，我十七岁的时候，遇见一个美容院的姐姐，跟我说到她们美容院理疗可以祛除痘印，后来我真去了，大概去了两个月，细节我就不描述了，反正后来emmm，整张脸除了额头和鼻子，都是大颗大颗凸起来的红痘痘，别提多吓人，那时候我深深恐惧任何人看我。"
    ,"用户5932"
    ,"2023-03-26");
    content_arr[2] = new Array("中医靠谱吗"
    ,"亲身经历。发泄一下。前提，我是信中医理论的，早些年也是作为中医支持者大战天涯国观杂谈的人。我妈现在是肺癌，靶向药耐药后进行了化疗，虽然还没有西医宣告医治无效，但是从吃靶向药开始就在吃中药。但是，给他开中药的医生，她连见都没有见过，全靠一个特别能忽悠的大骗子在中间忽悠（此人就是骗子，我已落实，但我妈不信还是觉得他是好人）。每年七八万，一买买一年份的草药，然后我们自己拿回来熬，骗子还声称那个中医大夫是他师父， 他师父贴了不少钱。"
    ,"用户5893"
    ,"2023-02-26");
    content_arr[3] = new Array("便秘原来也可以用中医治"
    ,"我有很严重的便秘，每三天一次，每次拉下都会肛门出血，持续了有大概一年半。谁能想象这一年半每隔三天便被人爆一次菊的痛苦≥﹏≤，真的超级痛，拉完屁股火辣辣的，每次都很害怕上大号。从此生命中的噩梦除了大姨妈，又来了一个上大号，不拉很痛苦，拉了也很痛苦。自己尝试吃香蕉啊，吃什么火龙果，喝蜂蜜水，做肠胃操，总之吃各种传说中能软化大便的，毛用没有，该咋样还咋样。后来跟我室友说，室友说我可能痔疮，要开刀，我就跑去医院检查了。其实我本人挺懒的，所以磨磨蹭蹭痛苦一年半都懒的去医院挂号，说到要开刀才实在没办法去医院挂号。"
    ,"用户4425"
    ,"2023-02-16");
    content_arr[4] = new Array("中医治疗第22天"
    ,"老婆怀孕快三个月，耳廓发炎，症状是耳朵红肿发烫，疼痛难忍，西医诊断为耳廓软骨膜炎（这个毛病两年前得过，当时去耳鼻喉科医院，吃头孢加每天10mg强的松10天就好了）。所有的专科医院都不收，最后去仁济医院五官科，诊断为耳廓软骨膜炎，因为是孕妇，不好用药，先给两天头孢替安注射，红肿有点消退，但是停了药，又变得更加红肿，然后又去瑞金医院的五官科，看了个主任医生，上来就说得考虑保孩子还是保耳朵，没啥好办法，也给开了头孢注射6天，还是继续红肿发烫，疼痛难忍，没啥改善。后边在医生的建议下口服头孢差不多一周，还是没啥"
    ,"用户7621"
    ,"2023-03-20");
    content_arr[5] = new Array("中医治疗经历"
    ,"今年六月中旬我载着刚高考完的女儿和我母亲一起，去我母亲老家喝她表弟的大宅落成喜酒。我母亲老家在邻县的一个镇上，距我们家有120多公里，虽然不是很远，但我母亲嫁过来后由于忙于生计，很少有时间回去。没想到此行给我和我女儿带来了意外的惊喜！一路开着车向老家奔驰，在路上我母亲聊到她在老家有个同族的堂妹是个土医，在年轻时就跟着自己父亲学中医给人看病。我母亲说小时候去她家玩时，在她家书房里见过一整套线装的抄在宣纸上的中医药方和古籍医书，据说是爷爷的爷爷留下来的，现在这个堂妹继承下来了，在家给人捡药治病"
    ,"用户8513"
    ,"2023-03-21");
    
    return content_arr;
}