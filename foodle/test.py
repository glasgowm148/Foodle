from django.test import TestCase
from .forms import SubmitForm

class tests(TestCase):
    def if_info_only(self):
        form = SubmitForm({
            'info': "deal",
        }, entry=self.entry)
        self.assertTrue(form.is_valid())

    def if_url_only(self):
        form = SubmitForm({
            'url': "deal",
        }, entry=self.entry)
        self.assertTrue(form.is_valid())