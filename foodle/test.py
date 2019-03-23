from django.test import TestCase
from .forms import SubmitForm

class tests(TestCase):
    # two required fields are fulfilled, form.is_valid should return true
    def test_info_and_category(self):
        form = SubmitForm({
            'name': 'deal',
            'info': "deal of something...",
            'category': "other"
        })
        self.assertEquals(True, form.is_valid())

    # only one required field is fulfilled, form.is_valid should return false
    def test_if_no_info_and_name(self):
        form = SubmitForm({
            'category': "indian"
        })
        self.assertEquals(False, form.is_valid())

    #  required fields are fulfilled but the url is not a valid url form.is_valid should return false
    def test_url(self):
        form = SubmitForm({
            'name': 'deal',
            'info': "deal",
            'url': "deal",
            'category': "indian"
        })
        self.assertEquals(False, form.is_valid())
    
    # if no name is specified which is required for a form
    def test_no_name(self) :
        form = SubmitForm({
            'info': "deal",
            'url': "deal",
            'category': "indian"
        })
        self.assertEquals(False, form.is_valid())
    
    # if the picture path is not valid
    def test_bad_picture_url(self) :
        form = SubmitForm({
            'info': "deal",
            'url': "deal",
            'category': "indian",
            'picture': 'bad_link/bad.png'
        })
        self.assertEquals(False, form.is_valid())
