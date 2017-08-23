DEBUG = False

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = '4x9hi$%u06(^knxgj!)v$!b$q1n&thg@6$!d*)5y+5lo_00l!^'

ALLOWED_HOSTS = ['']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': '',
        'USER': '',
        'PASSWORD': '',
        'HOST': '',
        'PORT': '',
        'CONN_MAX_AGE': 600,
    },
}