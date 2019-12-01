import dlib
from skimage import io
from scipy.spatial import distance


class FacesError(Exception):
    def __init__(self,*args,**kwargs):
        Exception.__init__(self,*args,**kwargs)


class face_comparator():
    def __init__(self, user_img_path):
        print("reading", user_img_path)
        self.user_image = io.imread(user_img_path)
        self.faces = []
        print("loading dats")
        self.sp = dlib.shape_predictor('mlmodel/shape_predictor_68_face_landmarks.dat')
        self.facerec = dlib.face_recognition_model_v1('mlmodel/dlib_face_recognition_resnet_model_v1.dat')
        print("dats was loaded")
        self.detector = dlib.get_frontal_face_detector()
        print("detecting faces")
        det = self.detector(self.user_image, 1)
        print("faces detected")
        if len(det) < 1:
            raise FacesError('No faces in your image!')
        shapes = []

        print("det:", det)
        for k, d in enumerate(det):
            shapes.append(self.sp(self.user_image, d))
            self.faces.append(self.user_image[d.top() - 70:d.bottom() + 50, d.left() - 50:d.right() + 50])
        self.user_face_descriptors = [self.facerec.compute_face_descriptor(self.user_image, shape) for shape in shapes]

    def check_faces(self, rand_img_path):
        rand_img = io.imread(rand_img_path)
        dets_2 = self.detector(rand_img, 1)
        if len(dets_2) < 1:
            return False
        shapes= []
        for k, d in enumerate(dets_2):
            shapes.append(self.sp(rand_img, d))
        face_descriptors = [self.facerec.compute_face_descriptor(rand_img, shape) for shape in shapes]
        a = []
        for user_face_descriptor in self.user_face_descriptors:
            for rand_face_descriptor in face_descriptors:
                a.append(distance.euclidean(user_face_descriptor, rand_face_descriptor))
        return not all(i >= 0.55 for i in a)
