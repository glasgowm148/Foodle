from django.test import TestCase
from .forms import SubmitForm

class tests(TestCase):
    def test_info_and_category(self):
        form = SubmitForm({
            'info': "deal",
            'category': "miss me wit dat weeb shit"
        })
        self.assertEquals(True, form.is_valid())

    # check if 
    def test_if_no_info(self):
        form = SubmitForm({
            'category': "miss me wit dat weeb shit"
        })
        self.assertEquals(False, form.is_valid())

    # if url is not a valid url, this should return False, so the test should pass
    def test_url(self):
        form = SubmitForm({
            'info': "deal",
            'url': "deal",
            'category': "miss me wit dat weeb shit"
        })
        self.assertEquals(False, form.is_valid())