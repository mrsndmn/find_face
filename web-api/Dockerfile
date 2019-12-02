from continuumio/miniconda

run conda install -y -c conda-forge dlib && mkdir /app

COPY . /app

WORKDIR /app

run pip install -r requirements.txt

ENV PYTHONPAYH=.
entrypoint ["python3", "api.py"]