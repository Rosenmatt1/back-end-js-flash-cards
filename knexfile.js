module.exports = {
  development: {
    client: 'pg',
    connection:  'postgres://localhost/notecards'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
    
    // "postgres://nfdtainkomvqtz:8402c295619e3c909994c399b656a1be00d88eb2648e547b8cd3292c4fa7bd8e@ec2-23-23-184-76.compute-1.amazonaws.com:5432/d7h1o8majnjrpn" 
  }


};
