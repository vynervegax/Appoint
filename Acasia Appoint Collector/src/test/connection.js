import mongoose from 'mongoose';
mongoose.Promise = global.Promise;

const dbuser = 'test';
const dbpassword = 'test';
before(done => {
  mongoose.connect(`mongodb+srv://codaswisadmin:afterage78910@cluster0.plebt.gcp.mongodb.net/CODASWIS?retryWrites=true&w=majority`);
  mongoose.connection
    .once('open', () => {
      console.log('Connected to mongoDB...');
      done();
    })
    .on('error', err => console.log(err));
});
