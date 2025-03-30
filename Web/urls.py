"""
URL configuration for Web project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/4.2/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib.auth import views as auth_views
from django.contrib import admin
from django.urls import path
import main.views as v
from main.forms import UserPasswordResetForm
urlpatterns = [
    path('admin/', admin.site.urls),
    path('', v.homepage, name='homepage'),
    path('games', v.games, name='games'),
    path('maps', v.maps, name='maps'),
    path('action', v.action, name='action'),
    path('register', v.register, name='register'),
    
    path('add_points', v.add_points, name='add_points'),
    path('get_points', v.get_points, name='points'),
    path('synthesize', v.synthesize, name='synthesize'),
    path('guides', v.guides, name='guides'),
    path('donate', v.donate, name='donate'),
    path('logins', v.logins, name='logins'),
    path('article/chemours', v.chemours, name='chemours'),
    path('article/trump', v.trump, name='trump'),
    path('article/ai', v.ai, name='ai'),
    path('logouts/', v.logouts, name='logouts'),
    path('password_reset/', auth_views.PasswordResetView.as_view(template_name='password-reset.html',form_class=UserPasswordResetForm, html_email_template_name='password_reset_email.html'),name='password_reset'),
    path('password_reset_sent/', auth_views.PasswordResetDoneView.as_view(template_name='password-reset-sent.html'),name='password_reset_done'),
    path('reset/<uidb64>/<token>/',  auth_views.PasswordResetConfirmView.as_view(template_name='password-reset-confirm.html'),name='password_reset_confirm'),
    path('password_reset_complete/', auth_views.PasswordResetCompleteView.as_view(template_name='password-reset-done.html'),name='password_reset_complete'),
    path('news', v.news, name='news'),
    path('newsletter_signup', v.newsletter_signup, name='newsletter_signup'),
    path('stylesheet.css', v.get_questions, name='get_questions'),
    path('post_story', v.post_story, name='post_story'),
    path('sign_up',v.register, name='register'),
    path('unsubcribe', v.unsubcribe, name='unsubscribe'),
    path('newsletter_unsub', v.newsletter_unsub, name='newsletter_unsub'),
    path('about', v.about, name='about'),
    path('api/google-login', v.googlelogin, name='googlelogin')
]

