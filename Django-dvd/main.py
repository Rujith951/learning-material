class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age


person = Person("rujith", 21)


def func(*args, **kwargs):
    print(args, kwargs)


d = {"apple": 100, "banana": 60}
func(1, 2, 3, 4, 5, apple=100, banana=60)
func(1, 2, 3, 4, 5, **d)
