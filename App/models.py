from django.db import models

# Create your models here.
# python manage.py makemigrations
# python manage.py migrate
class User(models.Model):

    reg_mail = models.CharField(max_length=100, blank=False)
    reg_pwd = models.CharField(max_length=100, blank=False)
    #用户信息，昵称，性别，家乡，年龄
    reg_name = models.CharField(max_length=22, default='优秀学子')
    reg_sex = models.CharField(max_length=6,default='未知')
    # reg_bir = models.DateTimeField('生日', blank=False)
    #查看英雄获得的积分
    reg_lookscore=models.IntegerField('浏览积分',default=0)
    #点赞获得的积分
    reg_lovescore = models.IntegerField('点赞积分', default=0)
    #答题获得的积分
    reg_testscore = models.IntegerField('答题积分', default=0)
    #留言
    reg_speak = models.TextField('故事',default="有技术漏洞或者建议，欢迎指出")
    # reg_sex=models.CharField(max_length=5)
    # rex_name=models.CharField(max_length=10)
    # rex_name=models.CharField(max_length=10)



class hreo(models.Model):

    name = models.CharField('名称',max_length=30)
    pinyin = models.CharField('拼音',max_length=30,default='wuzhi')
    sex = models.CharField('性别',max_length=5)
    bir = models.CharField('出生日期',max_length=50)
    ass = models.CharField('地址',max_length=30)
    sto = models.TextField('故事')




class likes(models.Model):
    like_object = models.CharField('名称',max_length=30)
    like_num = models.IntegerField('点赞数')



