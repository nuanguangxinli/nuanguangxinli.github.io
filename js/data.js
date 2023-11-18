const therapists = [
    {
        name: "乐康博",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/b9c216750o05021eb28d0124eb9bb9de?fid=1585530642-250528-1103269311640016&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-cGmGHwwPwJrxc97YXRAmD9bkuXc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "400",
        pricetime: "/50分钟",
        pricedetail: "400/50分钟",
        info: "多流派受训，硕士学历，持续督导",
        experience: "500+小时",
        city: ["广州","珠海"],
        gender: "男",
        mode: ["视频", "面对面"],
        major: ["成人个体"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/b9c216750o05021eb28d0124eb9bb9de?fid=1585530642-250528-1103269311640016&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-cGmGHwwPwJrxc97YXRAmD9bkuXc%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/a14464542t30bf67028d85900407e0d3?fid=1585530642-250528-693534716155577&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-b%2fitXAGhVs50gi14miN4PkybjU0%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548742507887992079&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/136812152m7fa81cc7264f306a939dc0?fid=1585530642-250528-781273310807692&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-cMGe5mANE7%2bCV2Q1FwsoyEttmqo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548742507887992079&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/92bfab644qbc286372bf38777c73c0ed?fid=1585530642-250528-495771352212804&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-im%2fBKzuoM6d9I81hbncxNJunM5k%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548742507887992079&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "路一直都在",
            intro: ["硕士毕业于北京师范大学临床与咨询专业。 ", "本科毕业于新西兰奥克兰大学心理学专业。", "曾在以下单位从事心理咨询工作：", "北京师范大学（北京校区）心理健康服务中心；","中央民族大学心理健康教育与咨询中心；", "北京师范大学职业发展与就业指导中心；", "珠海市香洲区心理协会；","北京师范大学（珠海校区）心理健康服务中心；", "LGBTQ+友善咨询师", "500+小时个体咨询经历，持续接受督导。", "以人本为基础的整合取向咨询师。"],
            field: ["擅长人群：", "大学生，留学生，成年人，工作者","不擅长与儿童青少年工作","擅长领域：","情绪困扰——焦虑，抑郁等情绪的调节","个人成长——自我概念，自我认同，意义感，自我接纳和成长等","压力管理——学业压力，适应不良等问题"],
            education: ["新西兰奥克兰大学理学学士（心理学/哲学专业）", "北京师范大学应用心理学硕士（临床与咨询专业）", "2021/09-2022/04","情绪聚焦疗法必备基础课程"],
            works: ["《助人专业督导》 人民邮电出版社 2022"],
            process: ["在咨询中，我会尽可能创造安全和自由的氛围，让你可以在这种氛围中探索自己的内心世界。"],
            interview: [["无", [""]]],
            // [
            //     ["Q1:你觉得人类生存的核心动力是什么？", ["我认为每个个体都有着不一样的的核心动力，很多心理学家和哲学家都给出了属于他们自己或他们总结出来的一些答案，有的人认为是无意识的本能驱力，有的认为是达到个体的平衡状态，有的则认为是规避痛苦或不愉快等等。", "就我个人而言，我生存的核心动力是“存在”本身（参考海德格尔对存在的定义）。存在的状态让我可以去思考，去体验，去感受，去建构，由存在所衍生出来的所有东西组成了自我（此在），并且只要我还存在着，自我就还会继续扩大，充实。"]],
            //     ["Q2:核心动机是如何以健康的形式表达出来的？", ["当我们领会到“存在”的状态，全面觉察并接纳存在所衍生出的自我，并对未来会产生的更多的自我持开放的态度。"]],
            //     ["Q3:什么因素导致了心理失调的发生？", ["当我们对“存在”状态的领会被动或主动的被消解/蒙蔽，或者是无法全面觉察或接纳存在所衍生出的自我，从而对当下或未来的自我产生疑惑/排斥。"]],
            //     ["Q4:你觉得哪些方面对于一个人发生改变时最重要的？", ["无数个使人们真正领会到自己的存在的时刻，这种对存在的领会促使我们达到当下那一刻的自我圆满（有意识/无意识），从而觉察，接纳并开放的体验自我。"]]
            // ],
        },
        key: 1
    },
    {
        name: "王雨萌",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/513781997h03da61773d9f07c378aedb?fid=1585530642-250528-800123965944881&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eMDeIAX4JrNy%2fwJF8rDit%2bcOt14%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "200",
        pricetime: "/50分钟",
        pricedetail: "200/50分钟",
        info: "多流派受训，硕士学历",
        experience: "200+小时",
        city: ["北京"],
        gender: "女",
        mode: ["视频"],
        major: ["成人个体"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/513781997h03da61773d9f07c378aedb?fid=1585530642-250528-800123965944881&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-eMDeIAX4JrNy%2fwJF8rDit%2bcOt14%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/410688b8aqec03e339eab491d832b2cc?fid=1585530642-250528-479588659558430&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-N3%2fN7w1szZ%2fBhRu4eHoXsG2T0JE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548752776226094209&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "",
            intro: ["北京师范大学临床与咨询心理专业硕士，接受系统心理咨询受训。曾任北京师范大学心理学部心理健康服务中心咨询师、西北大学心理健康服务中心咨询师。研究生阶段主要科研方向：情绪与行为适应、青少年自伤行为。"],
            field: ["工作人群：青少年、成人、性少数群体；", "擅长方向：个人成长、亲密关系、情绪适应、学业职场"],
            education: ["2020.09-2022.06  北京师范大学临床与咨询心理学专业硕士", "2021.06-2021.10  图式治疗课程培训 林孟仪"],
            works: ["Liu, J., Wang, Y., Liu, X., Li, J., & Xing, S. (2023). Experiencing stress impact on adolescent repetitive nonsuicidal self-injury: The Mediating role of emotion dysregulation and maladaptive cognitive schemas [Article]. Journal of Affective Disorders, 339, 392–399.", "Wang Y., Gao Y., Liu J., Bai R., & Liu Z. Reciprocal associations between early maladaptive schemas and depression in adolescence: Long-term effects of childhood abuse and neglect. (Under Review)", "陈子循, 李金文, 王雨萌, 刘霞. (2023). 累积环境风险与大学生自伤的关系：情绪调节策略的作用. 心理发展与教育, 39(01), 109–120.", "李金文, 白荣, 王雨萌, 刘霞. (2023). 青少年抑郁与自伤行为的发展轨迹及其关系：基于两年的追踪研究. 心理发展与教育, 39(03), 429–438. "],
            process: ["我们的咨询将大致经历 评估—聚焦—探索—尝试 四个阶段。在初始咨询中，我会收集一些必要的信息，对你的基本情况进行评估。咨访匹配后，我们将共同确认咨询目标，并围绕目标进行充分讨论和探索。心理咨询是深入观察和体悟自我的过程，也是一个链接过去、思考当下的节点，我期待与你一起经历这段时间，一起感受改变的悄然发生。"],
            interview: [["Q1:希望通过咨询传达给来访者的态度？", ["我们是自己世界的主人，拥有自我生活的解释权。"]]]
        },
        key: 2
    },
    {
        name: "陈丹",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/d3404760bs73b7db0fb72724636dd177?fid=1585530642-250528-650157643898366&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-suKvUIyrZzaW6dncUK8o7GUS7XQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "300",
        pricetime: "/50分钟",
        pricedetail: "300/50分钟",
        info: "多流派受训，硕士学历，持续督导",
        experience: "286小时",
        city: ["广州"],
        gender: "女",
        mode: ["视频"],
        major: ["成人个体", "儿童/青少年"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/d3404760bs73b7db0fb72724636dd177?fid=1585530642-250528-650157643898366&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-suKvUIyrZzaW6dncUK8o7GUS7XQ%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/fc1e6acb7sb06d29985e85f07505b091?fid=1585530642-250528-702943959929689&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-qGb5XIsfLf1h4OErFcb70hzjKyo%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548785759019973404&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/62f7df0c7tde89a2d0fb44e1859107a1?fid=1585530642-250528-1052857027945291&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-KgmqEtNi2ubsQKIqL%2fg37Or0uv8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548785759019973404&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "你愿意相信你自己能够改变，变得安全、变得温暖、变得更好吗？",
            intro: ["我是北京师范大学临床与咨询方向毕业的硕士研究生，曾经在北京外国语大学、中国地质大学（北京）、For A Safer Space进行咨询工作，曾在北京大学第六医院心理科进行跟诊、见习，来访者包括儿童青少年到高校大学生、硕博研究生、海外华人、工作人士等。我的研究课题为正念与积极心理学，旨在探究如何帮助人们觉察自己的内在体验与情绪，提升接纳水平与幸福感。我在心理学领域已经学习超过7年，7年的时间让我更加相信每个人本身的潜能，我相信每个人都有变得更好，自我实现的能力与期望。我工作的风格是真诚、开放、温暖与包容，希望五十分钟的咨询时间能够提供给你一个安全舒适的环境，帮助你发现更多的自己，面对从前不敢面对的，看到之前不能看到的，接纳从前不能接纳的。"],
            field: ["擅长方向&工作人群：亲密关系相关、人际关系相关、情绪管理与调节相关、", ""],
            education: ["北京师范大学珠海分校应用心理学学士（心理健康与危机干预方向）", "北京师范大学应用心理学硕士（临床与心理咨询方向）"],
            works: ["参与中央高校基本科研业务费专项资金资助：正念对青少年情绪健康的瞬时和长期影响，2022年已结项；", "参与国家自然科学基金青年项目：正念冥想干预情绪惰性的效果及机制，2021年已结项；","Cognitive Flexibility and Social Adjustment in Daily Life among Children：the Role of Perceived Social Support（under review）", "Longitudinal Relationship Between Self-esteem and Adolescent Mental Health: The Mediation of Self-control and Moderation of Parental Autonomy Support（under review）"],
            process: ["在初次咨询之前，我们会有一个预咨询简单收集一些信息，互相了解咨询师与来访者双方大概的情况与风格，在互相评估觉得匹配以后正式开始工作；在咨询前期（第1-2次咨询）我们会有一些时间用于收集信息与了解情况，包括但不限于家庭情况、主要的困扰，咨询史与服药史，并确定咨询目标等；接下来，我倾向于用开放包容的方式与你一起，在确定我们接下来的工作目标以及工作的方向以后向着咨询的目标靠近；在咨询结束时，我们会回顾这段时间的经历，进行总结与告别。"],
            interview: [
                ["Q1:你觉得人类存在的核心动机是什么？", ["我认为人类存在的目的在于通过与人联结自我实现。在满足了基本的生理需求以后，人们会开始思考自己存在的意义。我们最初通过与父母产生联结，思考自己存在的意义，如果在不安全的关系中，我们可能会无法朝着自己内心的自我实现的道路成为自己想要成为的人，因为我们首先要确保自己是安全的。每个人都有自己想要成为的样子，有自我实现的期望，在安全的关系中，我们能够思考和表达自己的期望，成为自己想要成为的人。我希望我们的咨询能够通过提供给你一个安全的空间，让你能够安全的发现并成为自己想要成为的人"]],
                ["Q2:核心动机是如何以健康的形式表达出来的？", ["当个体察觉到自己的需要，并且能够安全的表现出来以后，他们会清晰自己想要的是什么，并且愿意为之努力。这时候的个体会拥有较高水平的自尊，能够在关系中安全的表达自己的需要，能够在受到伤害的时候说不或者保护自己，也能够在自己感到不安的时候找到合适的帮助自己缓解的方法。"]],
                ["Q3:什么因素导致了心理失调的发生？", ["当个体为了生存的需要，而压抑了自己的需求，无法自我实现，甚至产生了和自己内在的需要无法联结的情况时，人们会感受到主观上的痛苦，矛盾，以及纠结。"]],
                ["Q4:你觉得哪些方面对于一个人发生改变时最重要的？", ["我认为一个人改变的最重要的方面是，要有勇气开始改变并且愿意改变。成为现在的样子我们一定是在之前的生活中做出了最合适的选择，当我们选择改变时，需要迈出舒适圈，改变自己从前习惯的赖以生存的模式，这是一个人发生改变的前提，也是最重要的。"]]
            ]
        },
        key: 3
    },
    {
        name: "李思漫",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/215ec6e37te6e13617c86fb39d788ee3?fid=1585530642-250528-244346938192835&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dCdajPR2mh3vOh%2b%2benKt1YhH27I%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "300",
        pricetime: "/50分钟",//（线上）400（线下）/50分钟
        pricedetail: "4300/50分钟（线上）400（线下）/50分钟",
        info: "多流派受训，硕士学历，心理治疗师",
        experience: "300+小时",
        city: ["中山"],
        gender: "女",
        mode: ["视频", "面对面"],
        major: ["成人个体", "儿童/青少年"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/215ec6e37te6e13617c86fb39d788ee3?fid=1585530642-250528-244346938192835&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-dCdajPR2mh3vOh%2b%2benKt1YhH27I%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/006a3de76ha83f9c4985c7b60c558d21?fid=1585530642-250528-4608815633203&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-gUFH7jprLAFxi9Alms604%2fYk65s%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548805893253117959&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "Hi，我希望能在喧闹的生活里，陪伴你，寻找自己、关心自己，共同见证。",
            intro: ["中山市第三人民医院心理治疗师。", "北京师范大学临床与咨询心理硕士，师从张日昇教授系统学习箱庭疗法。", "广东外语外贸大学应用心理学学士。", "曾任：", "北师大雪绒花心理咨询箱庭咨询师；", "西北大学心理中心咨询师；", "北京市慧加童心心理咨询服务有限公司心理咨询师；", "广东省中山市人民医院心理科实习；", "北京大学第六医院见习；", "独立咨询时长300h+，持续接受督导。"],
            field: ["擅长方向：认知行为、箱庭疗法、人本主义", "工作人群：情绪调节、自我探索与成长、青少年咨询、学业工作压力、人际关系等"],
            education: ["2020.09.-2022.06.  北京师范大学临床与咨询心理专业硕士", "2016.09.-2020.06. 广东外语外贸大学应用心理学学士", "2020.12. 京师博仁箱庭心理咨询师研修班（初阶）-张日昇", "2020.12. 京师博仁箱庭心理咨询师研修班（中阶）-张日昇", "2021.03.-2021.06. 咨询心理学系列课程-张日昇", "2022.04. 个案概念化工作坊-贾晓明", "2023.06. 认知行为疗法工作坊-陈乾元"],
            works: ["中科院电子箱庭项目-箱庭咨询师、数据收集"],
            process: ["我坚持以来访者为中心的理念，提供安全、受保护的空间，陪伴来访者自我探索与表达，促进自我成长与接纳。我将以真诚、平等、开放的态度，在聆听、感受与反馈的过程中，帮助来访者梳理情绪与思路，一同寻找来访者内心的力量。", "短程咨询通常为2-12次左右，我可能会花1-3次咨询的时间去更好的了解您，以便在后续为您提供更合适的帮助，我们会逐渐熟悉并且讨论咨询目标，在这期间我也会给予必要的反馈与帮助；", "我们会根据咨询进程以及您的实际情况讨论咨询结束的时间，如果您因各种原因需要中断或提前结束咨询，也希望您能提前与我知会；", "若您需要请假或调整咨询时间，请您务必提前至少24小时告知我，这样我们双方都能够更机动地调整时间，非常感谢您的理解与配合。"],
            interview: [
                ["Q1:你觉得人类存在的核心动机是什么？", ["我认为寻求“存在”本身就是我们在这世上游走的动机之一。从降生伊始，我们就在寻找与周围世界的联系，而每个人与世界相连的的方式确是多样的，有的人希望让世界因自己发生一点改变；有的人希望自己在他人心中有一席之地；有的人想在离开之前找到生而为人的意义；有的人只想雁过无痕，平静地走完这一遭。", "而事实上，有时“雁过无痕”都会奢侈，我们总有很多“既想、又想”，一旦我们和他人、和世界互动，就难免有诸多意料之外的“副本任务”。从埃里克森的观点来看，我们在数十年的生命中不断询问“我是谁？我想要什么？我能做什么？”，我们探索我和他人、世界以及自己的联系在哪里，但可能永远无法得到最终的答案。", "因为生命是流动的，探索本身，以及在探索中不断变化的自己，就是答案。"]],
                ["Q2:核心动机是如何以健康的形式表达出来的？", ["昨日之非不可留。今日之是不可执。明日之望不可弃。"]],
                ["Q3:什么因素导致了心理失调的发生？", ["世间本就充满矛盾，每个人都有一些“纠结”，但有些人会陷入到这些“纠结”里，被各种念头控制，没有了自己。"]],
                ["Q4:你觉得哪些方面对于一个人发生改变时最重要的？", ["陪伴与见证。", "心理咨询像一根拐杖，自己的信念也是如此。我们可以在感到无力是时拄着拐杖走一段路，拐杖同我们一样留下了这一路的斑驳痕迹，看见了风雨变幻。我们凭借自己的力量努力改变，但并不是踽踽独行。当我们可以再次独立行走，我们可以将拐杖束之高阁，它会像一位老者，深藏过去的故事；它会像一枚勋章，纪念我们的新生。"]]
            ]
        },
        key: 4
    },
    {
        name: "刘俣瑶",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/dfe94516cj193fb2b9b4710d2439e523?fid=1585530642-250528-76654769231881&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-1E%2fL9GbfRnzIHfWBTmoWfvzAN5c%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "300",
        pricetime: "/50分钟",
        pricedetail: "300/50分钟",
        info: "高中心理老师，沙盘咨询师，硕士学历",
        experience: "400+小时",
        city: ["上海"],
        gender: "女",
        mode: ["视频", "面对面"],
        major: ["成人个体", "儿童/青少年", "家庭/伴侣"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/c66cf7569ic448e934786e9d9b04fd49?fid=1585530642-250528-714056412863561&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-mmY%2fxliTNSITkyMCBqxEhiWlMLA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548820247933993402&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/4c603226eo2f66305bed23f97261fdab?fid=1585530642-250528-291226885444128&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-rP4nDbhrpGAe%2f86pxcQxyrZ0iVE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548820247933993402&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/44b85cb55ne4c424adf416e45b6adf9b?fid=1585530642-250528-760726061765291&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-mEowjsjexFu2TWofFvWRnMI2B5M%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548820247933993402&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/67fdd4885od9feffc2247583cf4df05f?fid=1585530642-250528-85191411210905&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jRAsuk8Bdn%2bbLDgVDp16uv42tx4%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548820247933993402&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/badbc28e2i16f51e1fa61e1d439a895c?fid=1585530642-250528-815081556953344&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-5frot3R9%2bc%2fU9CcrDhzhAnJbdB8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548820247933993402&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "没关系，我会一直在的，所有的事情都会过去，请记住，你值得被爱和喜欢。",
            intro: ["北京师范大学心理学部临床与咨询心理专业硕士", "中国心理协会注册助理咨询师（ZX-23-116）", "箱庭(沙盘)疗法咨询师", "现任某市重点中学专职心理咨询师", "曾任北京师范大学心理学部心理健康服务中心咨询师", "曾任北京外国语大学心理健康服务中心咨询师"],
            field: ["工作人群：青少年、成人、家庭；", "擅长方向：学业压力、亲子关系、个人成长、亲密关系、讨好型人格、亲密关系","【青少年/高中生】","处于青春期的孩子情绪不稳定，容易和父母产生冲突；面对无尽的作业和考不完的试，压力大的喘不过气；有时也会和朋友吵得不可开交；如果你希望更加顺利度过青春期，我们可以一起通过个体咨询或家庭咨询，成为更好的大人。","【成人/高中生/讨好型人格】","有时不敢拒绝别人，有时又不敢表达自己的想法，非常在乎他人评价，并常常感到委屈等，你可能是讨好型人格，如果你希望建立稳定的自我，活得更加潇洒和自在，也来可以试试心理咨询。","【个人成长议题】","每个人或许都有一些自我认同、心理成长、完美主义、自信缺失等议题，如果你感到痛苦，希望更加接纳自己，我们可以尝试一起探索自我潜能。"],
            education: ["北京师范大学应用心理学临床与咨询方向硕士", "箱庭心理咨询师研究班初阶、中阶课程", "郭丽安系统式家庭治疗", "许维素SFBT儿童与青少年焦点解决短期心理咨询（培训中）"],
            works: ["无"],
            process: ["【成人个体咨询流程与方式】每次50分钟，每周一次；一般开始的1-2次为初始访谈，初步评估后如有不适合工作的个案会与来访共同商定，通过专业途径进行转介；咨询的主要形式是视频咨询。咨询的次数，视个案本人的情况及需要共同协商决定，一般8－12次会有阶段性改变。", "【儿童咨询流程与方式】以沙盘疗法和SFBT为主，每次50分钟，每周一次；一般开始的前4次为初始评估阶段，第一次先见家长，请务必在预约时注明（青少年咨询），见完家长之后，了解孩子的情况，以及对孩子的工作模式和相关要求，双方协商都同意后，才会进入正式的初始评估，评估后如有不适合工作的个案或需要到相关专业机构进行更进一步评估或诊断的个案会与家长协商，或通过专业途径进行转介；咨询的主要形式是视频咨询或者面对面咨询；咨询的时长，视个案的情况及需要共同协商决定。"],
            interview: [["无", [""]]]
        },
        key: 5
    },
    {
        name: "孙凌",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/cfd9fcfd8q140bf8e3e2f427997c59f7?fid=1585530642-250528-583334670489398&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jTYsi4eLnLVxWLboA98ztJG0YhE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "800",
        pricetime: "/50分钟",
        pricedetail: "800/50分钟",
        info: "多流派受训，博士学历，高校讲师",
        experience: "1000+小时",
        city: ["珠海"],
        gender: "女",
        mode: ["面对面"],
        major: ["成人个体", "儿童/青少年"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/cfd9fcfd8q140bf8e3e2f427997c59f7?fid=1585530642-250528-583334670489398&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-jTYsi4eLnLVxWLboA98ztJG0YhE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "见面再说！",
            intro: ["北京师范大学心理学院临床与咨询方向博士，国家二级心理咨询师，中国心理卫生协会首批注册心理咨询师（注册编号：XXZZ-2021-254）。"],
            field: ["儿童青少年情绪调节", ""],
            education: ["2007年9月 - 2010年6月  箱庭疗法培训、督导", "2009年12月- 2014年6月 认知行为疗法培训、督导"],
            works: ["参与翻译《认知疗法—基础与应用》（第2版）与《认知行为疗法：新手治疗师实操必读》"],
            process: ["成人个案以认知-行为为主，儿童个案以箱庭游戏为主"],
            interview: [["无", [""]]],
            // [
            //     ["Q1:你觉得人类存在的核心动机是什么？", ["寻找存在的价值和意义"]],
            //     ["Q2:核心动机是如何以健康的形式表达出来的？", ["与人为善地生活和工作"]],
            //     ["Q3:什么因素导致了心理失调的发生？", ["任何单一因素都无法决定心理失调的发生和发展，生物-心理-社会共同作用的结果。"]],
            //     ["Q4:你觉得哪些方面对于一个人发生改变时最重要的？", ["好难回答啊"]]
            // ],
        },
        key: 6
    },
    {
        name: "张雨帆",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/c2c0d4f85q5c240761f5445f0dd67d67?fid=1585530642-250528-41911471048912&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-PhZoSXKMkXR0ItrFxfiir8DXfFw%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "300",
        pricetime: "/50分钟",
        pricedetail: "300/50分钟",
        info: "多流派受训，硕士学历，持续督导",
        experience: "650+小时",
        city: ["北京"],
        gender: "男",
        mode: ["视频"],
        major: ["成人个体"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/c2c0d4f85q5c240761f5445f0dd67d67?fid=1585530642-250528-41911471048912&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-PhZoSXKMkXR0ItrFxfiir8DXfFw%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/a5843385dv41830b430013f886caa67c?fid=1585530642-250528-852975576003137&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-V1Dx83BX1y%2bZ%2fJrWmuXB%2babX4Js%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548854878217370158&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/a7d40641es7b1669ec8c188cdd857445?fid=1585530642-250528-234967902050375&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-NKQPLgInFtI151Il6gVGWN0wXHM%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548854878217370158&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "",
            intro: ["北京师范大学应用心理硕士（临床与咨询心理方向），中国心理学会注册助理心理师（注册号：ZX-23-158），持续接受专业督导。", "目前在北京多所高校心理中心任兼职咨询师，曾于北医六院及安定医院精神科进行见习，在从事心理咨询行业前曾任职于四大会计师事务所。"],
            field: ["擅长方向：人际沟通、亲密关系、情绪调节、拖延、自我探索", "工作人群：大学生、职场人士；不擅长与儿童工作"],
            education: ["北京师范大学应用心理（临床与咨询心理方向）专业硕士", "许维素焦点解决短期治疗系统课程", "贾晓明“心理咨询个案概念化”工作坊", "北京同志中心21期性少数人群友善心理咨询师培训"],
            works: ["参与翻译《生涯发展与咨询（第二版）》（Brown&Lent，2013）", "参与强基计划大学生心理资本研究项目"],
            process: ["咨询时长：50分钟/次。", "咨询频率：一般情况下每周一次，咨询频率和总次数可视你的需求及实际情况调整。", "在开始的1～2次咨询中会进行初步评估，并讨论适宜的咨询目标和计划。", "若有其他需要了解的信息，可联系我的工作邮箱：octopus_rice@126.com，我会在看到后尽快回复你。"],
            interview: [["无", [""]]]
        },
        key: 7
    },
    {
        name: "李明远",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/1a518a55bod655fb8350ed8e478b4ea3?fid=1585530642-250528-604198695481644&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6oQ9k8%2bh8SmhajEHkWm3NyddLPI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "300",
        pricetime: "/50分钟",//（线下400/50分钟）
        pricedetail: "(线上)300/50分钟（线下)400/50分钟",
        info: "多流派受训，硕士学历，持续督导",
        experience: "700+小时",
        city: ["北京"],
        gender: "男",
        mode: ["视频", "面对面"],
        major: ["成人个体"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/1a518a55bod655fb8350ed8e478b4ea3?fid=1585530642-250528-604198695481644&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-6oQ9k8%2bh8SmhajEHkWm3NyddLPI%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/8889a2146p59d92319c7ff175c18fc5c?fid=1585530642-250528-798587323717084&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-D0FXwEZyjA2jXGDZbw4NTY2iQJA%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548869207366409490&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/0ad65e837nc2c099ceb462e7011d2a98?fid=1585530642-250528-5980837063915&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-YCgLRuTxitjcpEObU8XU1ORSYkE%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548869207366409490&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "我们可以坐下来聊聊看，慢慢的去体验当坐下来后这个世界会不会发生一些变化。",
            intro: ["关于 我","北京师范大学临床与咨询心理学专业硕士，曾在北京师范大学心理健康服务中心担任心理咨询师，在北京大学第六医院心理科见习、跟诊。研究生阶段在北师大积极心理实验室，研究方向为正念冥想，积极心理学等。曾为北京市戒毒管理局狱警提供心理健康服务。目前在中国人民大学担任心理咨询师。", "我在咨询中真诚、开放、细腻。随着我不断的在咨询行业前行，对人的多元性的理解越来越深刻，没有那么多是非对错，我更在意的是这些能不能对当下有所帮助。因此，我毅然决然的把我的事业投入到心理咨询这个行业。我进入这个行业大概2年多的时间，一步一步的学习、工作，踏踏实实的接受督导、体验。目前，累积心理咨询服务约700小时，稳定的接受注册督导师的一对一个案督导及团体督导。", "在咨询过程中始终贯穿以来访者为中心的人本取向的思想理念。擅长以循证治疗为主的心理咨询：以来访者的咨询目标为主，与来访者进行与其相匹配的短、中、长程咨询。视来访者的需求与实际情况，也会酌情采取相应的动力学取向、焦点解决或者家庭取向的咨询方案，以期更有效地达到来访者的咨询目标。","","关于 我与心理咨询","","正念冥想 & 慈悲冥想的干预项目","当我们看到了苦难，理解了苦难从何而来，慈悲心就会从内心中升起。慈悲冥想是基于冥想来锻炼我们慈悲心的冥想练习。在2021年，我设计了14天的慈悲冥想练习干预项目。结果发现慈悲冥想可以显著的增加人们的积极情绪，降低人们的消极情绪，并在一个月后依然保留这种效果。这也是我坚持练习正念冥想、倡导自我关怀的原因。如何应对我们生活中的负面情绪（如愤怒），是我们在人生中需要去体验的。","","北京市监狱戒毒管理局心理健康服务项目","2022年，我跟随祝卓宏教授为监狱狱警设计、提供心理健康服务。经过调研发现，普遍面临工作压力、家庭沟通、个人空间等心理问题。项目结束后，积极情绪和心理灵活性都有所增加。对于公职群体，处理工作和家庭的关系、清晰工作和个人的界限可以更好的提高工作成绩和家庭幸福。","","高校心理咨询师","2021年至今，我分别在北京师范大学、北京科技大学、中国人民大学等高校担任外聘心理咨询师，为18-30岁的在读学生提供心理咨询服务。和来访者探讨关于学业压力、生涯规划、亲密关系和职场人际关系等话题。"],
            field: ["增强情绪管理：焦虑情绪、抑郁情绪、愤怒、压力。我的专长是帮助您辨别和认可情绪的存在，挖掘情绪背后的思维模式；通过改变您的思维和认知模式，来帮助您更好地管理情绪。", "促进家庭沟通：家庭冲突、人际关系、讨好型人格、个人空间。我的专长是帮助家庭扫除这些沟通上的障碍，让您与家人能够更深入地了解彼此，更自如顺畅地表达自己所愿。", "探索个人成长：自尊自信、完美主义。我的专长是帮助你鼓起勇气，直面心灵上的伤痕，通过改善您的心理和认知模式，帮助您重新学习如何与他人相处、如何与自己相处的技巧，找回对自己的信念。"],
            education: ["北京师范大学临床与咨询心理学专业硕士", "曾在北京师范大学心理健康服务中心担任心理咨询师", "北京大学第六医院心理科见习、跟诊", "目前在中国人民大学担任心理咨询师"],
            works: ["无"],
            process: ["开始的1-2次咨询中我们会对你的情况进行初步的评估和匹配。评估时我会收集一些重要的信息，例如你为何想要来咨询、你面临的主要困难是什么、你想要通过咨询达到什么样的效果等。同时，我也会了解关于你的基本信息，包括你的生活现状、成长经历、家庭关系等。", "在后续的咨询中我们将一同合作制定咨询目标，共同经历探索、领悟和改变的过程，直到实现咨询目标。当然咨询中可能会出现不止一个目标，我们会充分讨论你的需求，再根据情况做出决定。咨询的次数也会随着所要讨论问题的多少和复杂程度而不同。咨询中的沟通是个双向的过程，我会非常欢迎也非常期待你表达你的感受、想法或疑虑，这将为我们建立起信任、平等的关系打下良好的基础。"],
            interview: [["无", [""]]]
        },
        key: 8
    },
    {
        name: "岑烯铭",
        avatar: "https://thumbnail0.baidupcs.com/thumbnail/eaa3d5185m68dc327d340db330d3d5e5?fid=1585530642-250528-52331650252376&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XakbwLF4gcrXQT9B6jmGDzijZMg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
        price: "400",
        pricetime: "/50分钟",
        pricedetail: "400/50分钟",
        info: "多流派受训，海外硕士学历，海外咨询师",
        experience: "1200+小时",
        city: ["海外", "新西兰奥克兰"],
        gender: "女",
        mode: ["视频"],
        major: ["成人个体"],
        detail: {
            pics: [
                "https://thumbnail0.baidupcs.com/thumbnail/eaa3d5185m68dc327d340db330d3d5e5?fid=1585530642-250528-52331650252376&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-XakbwLF4gcrXQT9B6jmGDzijZMg%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548728254705790460&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/d41c01a21l038116193b81fea16721fc?fid=1585530642-250528-612319320225149&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-nyRXV1tdQwlgu7H5wP0GeVEFk9o%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548875197830278857&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/83c77d65eh74b7555fedb487225185f8?fid=1585530642-250528-618807850127113&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-aN6c%2b2qEkShJ2VwGo%2bzcho3yo%2f8%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548875197830278857&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image",
                "https://thumbnail0.baidupcs.com/thumbnail/262e0fef0p2b9220448f4e82df2b0104?fid=1585530642-250528-256431367287879&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-DaAkeqcc2lKNqBfUtnMaTbP%2bcWw%3d&expires=8h&chkbd=0&chkv=0&dp-logid=548875197830278857&dp-callid=0&time=1700316000&size=c1999_u1999&quality=100&vuk=1585530642&ft=image"
            ],
            sentence: "我们值得被爱，被理解。我们每一个人都很重要，我们面前是有无数种可能性的。",
            intro: ["出生于中国广东广州，接受了新西兰高中和大学系统的培训。精通英语，普通话和粤语，和拥有丰富的文化语言背景。","目前就业于新西兰一所本土精神、心理健康机构，拥有超过多年的一线和二线的实践经验，提供文化和情感的支持。同时，为家庭医生诊所，学校教育机构和相关健康机构提供心理支持和讲座服务。","志愿于新西兰警察局旗下的受害者支持组织Victims support 和新西兰急救中心St Johns 服务，为当地有需要的市民提供语言，和文化的支持帮助。","完成 新西兰奥克兰大学的社会学，语言教学和心理学本科学历学位","完成 新西兰梅西大学的心理辅导硕士学历学位"],
            field: ["人际关系，家庭关系，术后情绪管理", "新生儿家庭的支持辅导，了解孩子的成长曲线","情绪与情感，疏解方式和技巧","青少年，长者，性少数人群"],
            education: ["Triple P 积极家长课程执业认证", "CBT 认知行为疗法", "SSFC 单次家庭治疗", "First Aid 紧急急救证书", "MAPA 实际和潜在攻击的管理疏导", "ASIST 自杀干预技能培训", "LGBT 性少数群体培训"],
            works: ["无"],
            process: ["心理咨询过程乍一看很像漫无边际的漫谈，但是作为咨询师是需要保持专业化的思路。比如我们会在一开始次初始咨询当中，收集一些关键必要的信息，使来访者和咨询互相有个初步了解和建立咨询中的信任关系。心理咨询过程中，来访者可以在一个安全的环境中卸下所有的想法，是一种能量的释放。而此时，作为咨询师，我的工作会根据来访的自我探讨和反思进行阶段性的目标调整。"],
            interview:             
                [
                    ["Q1:你觉得人类存在的核心动机是什么？", ["我认为人类存在的核心动机是思考生理和心理的需求。当我们最基本的层次-生理需要满足的时候，我们懂得为自己吃饱穿暖。又好比我们满足生理需求之后，就追求更高成面的心理满足和社会认同，我们需要被爱，被尊重，被理解，同时我们也希望人格与自身价值被承认，和存在的意义。"]],
                    ["Q2:核心动机是如何以健康的形式表达出来的？", ["当我们的需要和希望可能还处于萌芽阶段的时候，我们开始了解到我们想要什么，我们有了想法，感知和行动。"]],
                    ["Q3:什么因素导致了心理失调的发生？", ["当我们的需求不能被接纳和不被理解，又或许在某些情况下，我们不得不需要隐藏自己的渴望的时候，心理失调变发生了。"]],
                    ["Q4:你觉得哪些方面对于一个人发生改变时最重要的？", ["从一个人开始了解到自己的需求和渴望，同时在镜映上看到需要被爱，需要被保护的自己。"]]
                ],
        },
        key: 9
    }
]