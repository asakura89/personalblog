
Entity Bean:
+ contains data
+ contains logic
+ inherit from its framework
+ is an RMI stub with its own RMI connection
    - 1 RMI connection consume 1 port at a time
    - every requested beans consume a port
+ identified by primary key
+ decorated by annotation (attribute in .net)

Entity Object:
+ contains data
+ contains logic
+ inherit from its framework
+ identified by primary key
+ decorated by attribute

POJO / POCO:
+ contains data
+ doesn't depend on any framework base class
+ contains methods / logic

DTO:
+ contains data
+ doesn't depend on any framework base class
+ doesn't contains methods / logic

God Object:
+ contains many data
+ contains many methods
+ object that know too much
+ object that does too much

Value Object:
+ contains data
+ object that doesnt have identity like entity
+ compare by using properties / fields only (can be all properties or only some)
+ duplicated object can be treated as same object and can be replaced
+ should be immutable
+ gethascode and equals must be have implemented manually instead of using the one that belonged to framework


Source:

https://en.wikipedia.org/wiki/Entity_Bean
https://docs.oracle.com/cd/A97335_02/apps.102/a83725/entity1.htm
https://www.c-sharpcorner.com/UploadFile/5d065a/poco-classes-in-entity-framework/
https://en.wikipedia.org/wiki/God_object
https://martinfowler.com/bliki/ValueObject.html
https://enterprisecraftsmanship.com/posts/value-objects-explained/
https://enterprisecraftsmanship.com/posts/dto-vs-value-object-vs-poco/
https://grabbagoft.blogspot.com/2007/06/generic-value-object-equality.html
https://stackoverflow.com/a/725365/1181782
https://stackoverflow.com/a/57350724/1181782


