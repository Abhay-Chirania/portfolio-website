from django.shortcuts import render
from .models import Info,Project,More



def home_page(request):
    obj = Info.objects.first()
    skills = obj.skills_8_csv_values.split(",")
    skills += ["<None>" for _ in range(8-len(skills))]
    proj = Project.objects.all()
    more = More.objects.all()

    context = {
        'object': obj, 'skills':skills,'proj':proj,'more':more
    }

    return render(request,"portfolio/main.html",context)
