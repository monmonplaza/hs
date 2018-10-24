$(document).ready(function () {

    //active languiage
    $('.eng').css('font-weight', 'bold');

    //smooth scrolling
    $('nav ul li a').click(function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 500);
        $('header').addClass('close');
        $('header').removeClass('open');
        $('.menu-toggle').removeClass('active');
    });

    //Banner Parallax
    $(window).scroll(function () {
        var wscroll = $(window).scrollTop();
        $('.banner').css('background-position', 'center ' + (wscroll) * 0.75 + 'px');

    })


    //active menu switching
    $(window).scroll(function () {

        var scrollbarLocation = $(this).scrollTop();

        $('nav ul li a').each(function () {
            var sectionOffset = $(this.hash).offset().top - 150;
            console.log(sectionOffset);
            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active-nav');
                $(this).parent().siblings().removeClass('active-nav');
            }
        });
    });

    //header shrinking effect

    $(window).scroll(function () {
        if ($(window).scrollTop() < 100) {
            $('header').addClass('onTop');
            $('header').removeClass('shrink');
        } else {
            $('header').removeClass('onTop');
            $('header').addClass('shrink');
        }
    });




    //ACCORDION
    $('.answer').hide();
    $(".set > .question").on("click", function () {
        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(this).siblings(".answer").slideUp(200);
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
        } else {
            $(".set > a i").removeClass("fa-minus").addClass("fa-plus");
            $(this).find("i").removeClass("fa-plus").addClass("fa-minus");
            $(".set > a").removeClass("active");
            $(this).addClass("active");
            $(".answer").slideUp(200);
            $(this).siblings(".answer").slideDown(200);
        }
    });

    //activate menu responsive - this will animate the burger button
    $('.menu-toggle').click(function () {
        $(this).toggleClass('active');
        $('header').toggleClass('open');
        $('header').removeClass('close');

    })




    $('.chis').click(function () {
        $(this).css('font-weight', 'bold');
        $('.eng').css('font-weight', '300')
        var chi = true;
        if (chi = true) {
            //know about us
            $('.about-para').text(" HostingSolutions是澳大利亚的Airbnb物业管理服务。我们在住宅物业租户中发挥作用。在业主允许的情况下，我们一直在寻找优质房产租赁Airbnb。我们的目标是确保所有物业得到妥善照顾，并与澳大利亚各地的业主建立长期合作关系。我们的业务建立在信任，关系和结果的基础上。 ");
            //about owner
            $('.para-1').text("Sammy Tam  Hosting Solutions的创始人  Sammy在学校学习旅游管理，并在酒店业拥有6年的经验，她了解良好的客户体验的重要性。");
            $('.para-2').text("她独自从香港前往澳大利亚并体验各种类型的住宿，她已经能够利用她所学到的知识创建一个非常成功的Airbnb业务。  Sammy在墨尔本的一家五星级酒店工作，每天都与世界各地的旅行者打交道。 Sammy相信真正的热情好客精神，并致力于行业。看到别人的快乐给Sammy带来了最大的快乐。 ");
            $('.para-3').text("Sammy是维多利亚州的合格房地产经纪人代表，由REIV，维多利亚房地产协会颁发证书。此外，房地产投资是Sammy的热情，她了解房东的观点。我们都知道现金流在房地产投资中发挥着重要作用，更不用说一个稳定的房客将专业地照顾你的房产。  ");
            $('.para-4').text("Sammy满足并超越了成为Airbnb成功主机的所有要求，她非常努力地花费她的Airbnb产品组合，并且在未来全球化。  现在向Sammy问好，看看Hosting Solutions如何帮助你☺")
            $('.para-5').css('display', 'none');
            $('.para-6').css('display', 'none');
            //faq
            $('.q1').text("托管解决方案有何功能？");
            $('.a1').text("Hosting Solutions通过我们拥有或租赁的房产管理成功的Airbnb投资组合。  ");

            $('.q2').text("为什么我会租给你而不是租客？");
            $('.a2').text("您的财产将比其他人更好地照顾。它将定期获得专业清洁，并制定安全政策。没有广告费或任何房地产经纪人管理费。 不用担心空缺或租户迁出。沟通变得轻松而严格。");

            $('.q3').text("旅行者会把我的财产丢弃吗？  ");
            $('.a3-1').text("我们发现了相反的情况。 AirBnB旅行者了解AirBnB的所有内容，根据我们的经验，尊重他们的住宿。我们确保我们筛选每一个预订，以确保他们之前通过AirBnB至少有5个热门评论。我们检查并筛选他们的身份证，并且在2年内没有一次糟糕的经历。");

            $('.a3-2').text("  我们还有一个非常严格的没有派对，禁止吸烟和宠物的政策，必须遵守和签署，然后才能接受预订。我们也会在每次入住后检查酒店。您的财产掌握在Hosting Solutions手中。  我们对“正确”类型租户的严格筛选和合格方案可以降低任何风险。我们购买特定保险，Airbnb Host Guarantee还可在事故发生时保护主机高达1,000,000美元。  ");

            $('.a3-3').text("3.那么它将如何运作？有收费吗？  不，我就像一个房客（你曾经拥有的最好的房客）我会支付保证金，预付房租，然后是每周或每月租金，就像普通房客一样。您无需支付任何费用。您收取保证协议的租金，我将照顾您的财产，就好像它是我自己的。节省费用，让您的房子得到照顾，没有麻烦。  我甚至照顾任何小的维护。例如，如果灯泡熄灭或厨房抽屉断裂。我将以我的成本解决这个问题并保持房屋符合最高标准。除非你想做，否则我不想用细节或费用来打扰你。当然，主要的化妆品程序我们会通知您并请求许可。我们的目标是与我们的业主建立长期合作关系，为您提供无压力的体验，同时获得最佳回报，没有麻烦。  ");

            $('.q4').text("那么它将如何运作？有收费吗？  ");
            $('.a4-1').text(" 不，我就像一个房客（你曾经拥有的最好的房客）我会支付保证金，预付房租，然后是每周或每月租金，就像普通房客一样。您无需支付任何费用。您收取保证协议的租金，我将照顾您的财产，就好像它是我自己的。节省费用，让您的房子得到照顾，没有麻烦。  我甚至照顾任何小的维护。例如，如果灯泡熄灭或厨房抽屉断裂。我将以我的成本解决这个问题并保持房屋符合最高标准。除非你想做，否则我不想用细节或费用来打扰你。当然，主要的化妆品程序我们会通知您并请求许可。我们的目标是与我们的业主建立长期合作关系，为您提供无压力的体验，同时获得最佳回报，没有麻烦。  ");

            $('.a4-2').css('display', 'none')

            $('.q5').text("我如何开始");
            $('.a5').text("请通过电话或电子邮件联系。我们会更多地了解您的房产以及您的个人需求和需求。我们将回答您的任何问题，并确保您的物业非常适合我们，我们非常适合您。从那里它真的可以成为你理想的套装，忘记和收集。如果您想亲自见面，我们也可以安排我们的合作伙伴与您会面并查看酒店。我们的业务建立在信任，关系和结果之上。");
        }
    });

    $('.eng').click(function () {
        $(this).css('font-weight', 'bold');
        $('.chis').css('font-weight', '300')
        var eng = true;
        if (eng = true) {
            //know about us
            $('.about-para').text(" Hosting Solutions is an Airbnb property management service in Australia. We play a role in residential property tenant. We are always looking for quality properties to lease on Airbnb with permission of the owner. Our goal is to make sure all the properties is well looked after and create a long term relationship with property owner across Australia. Our business is built on trust, relationships and result.");
            //about owner
            $('.para-1').text("Sammy has studied tourism management in school and has 6 years of experience in the hospitality industry, she understands the importance of great guest experiences. ");
            $('.para-2').text("Having travelled to Australia from Hong Kong by herself and experiencing all types of accommodation, she has been able to use what she learnt to create a very successful Airbnb business.  ");
            $('.para-3').text("Sammy works in a 5-star hotel in Melbourne and she deal with traveler around the world everyday. Sammy believes in true hospitality spirit and have committed to the industry. Seeing others happy brings Sammy the biggest joy.   ");
            $('.para-4').text("Sammy is a qualified property agents representative in Victoria, with certificate given by REIV, Real Estate Institute Victoria. Also, property investing is Sammy’s passion and she understands landlord’s point of view. We all know cash-flow plays a big role in property investing, not to mention a stable tenant who will look after your property professionally.   ");
            $('.para-5').css('display', 'block');
            $('.para-6').css('display', 'block');

            //faq
            $('.q1').text("What does Hosting Solutions do?");
            $('.a1').text("Hosting Solutions manage a successful Airbnb portfolio through properties we either own or renting.");

            $('.q2').text("Why would I rent to you rather a tenant?");
            $('.a2').text("Your property will be looked after better than anyone else. It will get professionally clean regularly, and safty policy in place. No advertising fees or any real estate agent managing fees. No worrying about vacancies or tenants moving out. Communication become easy and strict forward.");

            $('.q3').text("Travellers will trash my property?");
            $('.a3-1').text("We have found the opposite. AirBnB travelers know what AirBnB is all about and in our experience, treat their stays with respect. We make sure we screen every single booking to make sure they have at least 5 glowing reviews through AirBnB previously. We check and screen their ID and in 2 years have not had a single bad experience.");

            $('.a3-2').text("We also have a VERY strict no parties, no smoking and no pet’s policy that has to be adhered to and signed off on before their booking is accepted. We also check the property after every single stay. Your property is in good hands with Hosting Solutions");

            $('.a3-3').text("Our strict sifting and qualifying formula for the 'right' kind of tenants reduces the risk of anything. We take out specific insurance and the Airbnb Host Guarantee also protects hosts up to $1,000,000 should accidents happen.");

            $('.q4').text("So how would it work? Are there any fee?");
            $('.a4-1').text("No. I would be just like a tenant (The best tenant you ever had) I would pay a bond, rent up front and then a weekly or monthly rent just like a normal tenant. There are zero fees for you. You collect your guaranteed agreed rent and I will look after your property as if it were my own. You save on fees and have your house cared for with no hassles.");

            $('.a4-2').text("I even take care of any minor maintenance. For example, if a light bulb goes out or a kitchen draw breaks. I will just fix that at my cost and keep the house up to top standards. I don’t want to bother you with minor details or costs unless you want to be. Of course, major cosmetic procedures we would notify you and ask permission. We aim on having a long-term relationship with our property owners and a stress free experience for you while getting your best return, with no hassles.");

            $('.q5').text("How do I get started?");
            $('.a5').text("Please reach out via phone or email. We’ll find out more about your property and your personal wants and needs. We will answer any of your questions and make sure your property is a good fit for us and we are a good fit for you. From there it can really be your ideal Set, Forget and Collect. If you would like to meet in person we can also arrange one of our partners to meet with you and view the property. Our business is built on trust,relationships and results.");
        }
    });

    //modal 

    $('.disclaimer').click(function () {
        $('.modal').css('display', 'block');
    });


    $('.close').click(function () {
        $('.modal').css('display', 'none');
    })

});

