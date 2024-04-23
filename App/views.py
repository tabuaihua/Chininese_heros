from urllib import request

from django.shortcuts import render
from django.shortcuts import redirect
from App.models import User,hreo,likes

# Create your views here.
def home(request):
    info_dict = request.session.get('info')
    if not info_dict:
        name1=None
    else:
        name1=info_dict
    return render(request, 'index.html',{'name1':name1})


# def login(request):
#     return render(request, 'login.html')


def find(request):
    return render(request, 'find.html')


# def register(request):
#     return render(request, 'register.html')


def login(request):
    if request.method=='GET':
        return render(request,'login.html')
    if request.method=='POST':
        userEmail=request.POST.get('username')
        userPassword=request.POST.get('userpassword')
        try:
            user=User.objects.get(reg_mail=userEmail)
            if userPassword==user.reg_pwd:
                request.session['info']= {'mail':user.reg_mail,'name':user.reg_name}
                return redirect('/')
            else:
                error_msg="密码错误"
                return render(request,'login.html',{'error_msg':error_msg})
        except:
            error_msg="用户名不存在"
            return render(request,'login.html',{'error_msg':error_msg})

def register(request):
    if request.method == "POST":
        userEmail = request.POST.get('useremail')
        userName = request.POST.get('username')
        userPassword = request.POST.get('userpassword')
        userRePassword = request.POST.get("userrepassword")
        try:
            user = User.objects.get(reg_mail=userEmail)
            if user:
                msg ="用户名已存在"
                return render(request, 'register.html',{'msg':msg})
        except:
            if userPassword != userRePassword:
                error_msg ="密码不一致"
                return render(request, 'register.html',{'error_msg':error_msg})
            else:
                register = User()
                register.reg_mail = userEmail
                register.reg_pwd = userPassword
                register.reg_name = userName
                register.save()
                return redirect('/login/')
    else:
        return render(request, 'register.html')

def heros(request):
    info_dict = request.session.get('info')
    if not info_dict:
        return redirect('/login/')
    # 从数据库选择对应英雄的信息显示到hreo页面的信息
    if request.method == 'GET':
        heroname = request.GET.get('heroname')
        heros = hreo.objects.get(name=heroname)
        herosex=heros.sex
        heroass=heros.ass
        herobir=heros.bir
        herosto=heros.sto
        heropin=heros.pinyin
    #根据登录用户，对用户积分数据进行更改
        use = User.objects.get(reg_mail=info_dict['mail'])
        use.reg_lookscore = use.reg_lookscore+1
        use.save()

        # nums=request.POST.get('num')
        # like=likes.objects.get(like_object=heroname)
        # if like:
        #     like.like_num=nums
        #     like.save()
        # else:
        #     like.like_object = heroname
        #     like.like_num = nums
        #     like.save()


    return render(request,'heros.html', {"heroname": heroname,"heroass": heroass,"herobir": herobir,"herosex":herosex,"herosto":herosto,'num':0,"heronames":heropin})



# def new (request):
#     import requests
#     res=requests.get("https://search.bilibili.com/all?keyword=关羽&from_source=webtop_search&spm_id_from=333.1007&search_source=5")
#     data_list =res.json()
#     print(data_list)
#     return render(request,'new.html',{"news_liat":data_list})


def xiugai(request):
    # hero = hreo.objects.get(id=85)
    # hero.name = '刘备'
    # hero.save()
    like=likes()
    like.like_object = "周瑜"
    like.like_num = 1
    like.save()
    return render(request,'register.html')




def user(request):
    if request.method == "GET":
        info_dict = request.session.get('info')
        if not info_dict:
            return redirect('/login/')
        use = User.objects.get(reg_mail=info_dict['mail'])
        score = use.reg_lookscore + use.reg_lovescore + use.reg_testscore
        speak = use.reg_speak
        return render(request, 'user.html', {"username": info_dict, 'score': score, 'speak': speak})
    elif request.method == "POST":
        info_dict=request.session.get('info')
        if not info_dict:
            return redirect('/login/')
        use = User.objects.get(reg_mail=info_dict['mail'])
        score = use.reg_lookscore + use.reg_lovescore + use.reg_testscore
        text =request.POST.get('text')
        use.reg_speak=text
        use.save()
        speak=use.reg_speak
        return render(request,'user.html',{"username":info_dict,'score':score,'speak':speak})



def question(request):
    info_dict = request.session.get('info')
    if not info_dict:
        return redirect('/login/')
    return render(request, 'question.html',{'name':info_dict})
