const db = require('./db')

const register = (uname, email, pasw) => {
    return db.User.findOne({ email }).then(user => {
        if (user) {
            return {
                status: false,
                message: 'user already present',
                statusCode: 401
            }
        }
        else {
            const newuser = new db.User({
                username: uname,
                email,
                password: pasw,
                bookings: []
            })

            newuser.save()

            return {
                status: true,
                message: 'register success',
                statusCode: 200
            }
        }
    })
}

const login = (email, pasw) => {
    return db.User.findOne({ email, password: pasw }).then(user => {
        if (user) {
            currentUser = user.username
            currentEmail = user.email
            return {
                status: true,
                message: 'login success',
                statusCode: 200,
                currentUser,
                currentEmail
            }
        }
        else {
            return {
                status: false,
                message: 'incurrect account number or password',
                statusCode: 401
            }
        }
    })
}

const allTour = () => {
    return db.Tour.find().then(result => {
        if (result) {
            return {
                statusCode: 200,
                tours: result
            }
        }
    })
}

const getOneTour = (id) => {
    return db.Tour.findOne({ id }).then(result => {
        if (result) {
            return {
                statusCode: 200,
                tour: result
            }
        }
    })
}

const booking = (email, tourData) => {
    return db.User.findOne({ email }).then(user => {
      if (user) {
       
        if (!user.bookings.find(({id}) => id === tourData.id)){
          user.bookings.push(tourData)
          user.save()
          return {
            status: true,
            statusCode: 200,
            message: "booked"
          } 
        }
        else {
          return {
            status: false,
            statusCode: 200,
            message: "already booked"
          }
        }
  
      }
      else {
        return {
          status: false,
          statusCode: 401,
          message: "error"
        }
      }
  
    })
  }

const  bookedData = (email) => {
    return db.User.findOne({ email }).then(Person => {
      if (Person) {
  
        return {
          status: true,
          statusCode: 200,
          data: Person.bookings
        }
      } else {
        return {
          status: false,
          statusCode: 401
        }
      }
    })
  }  

  const reviews = (id,reviewData) => {
    return db.Tour.findOne({ id }).then(user => {
      if (user) {
  
          user.reviews.push(reviewData)
          user.save()
          return {
            status: true,
            statusCode: 200,
            message: "submitted"
          }
        
      }
      else {
        return {
          status: false,
          statusCode: 401,
          message: "error"
        }
      }
  
    })
  }

const cancelTour =(email,id) => {
    return db.User.findOne({email}).then(result=>{
        if(result){

            let index = result.bookings.findIndex(obj => obj.id === id)
            result.bookings.splice(index,1)
            result.save()

            return{
                statusCode:200,
                message:"cancelled"
            }
        
        } 
        else{
            return{
                statusCode:401,
                message:"not present"
            }
        } 
    })
}  

module.exports = {
   register,login, allTour, getOneTour,booking,bookedData,reviews,cancelTour
}