from django.test import TestCase
from .forms import SubmitForm

def setUp(self):
    form = SubmitForm({
        'info': "deal",
    }, entry=self.entry)
    self.assertTrue(form.is_valid())
        
