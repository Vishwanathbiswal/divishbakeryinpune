import { Stack, Typography } from '@mui/material'
import { CardContent, CardMedia, Card } from '@mui/material'
import React from 'react'

const CakeSection = () => {
    // creating an array of images with their names
    const cakes = [
        {name: "Chocolate Cake", image:"https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80"},
        {name: "Colorful Cake", image:"https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=636&q=80"},
        {name: "Strwaberry Cake", image:"https://images.unsplash.com/photo-1622621746668-59fb299bc4d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=633&q=80"},
        {name: "Black Forest Cake", image:"https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=503&q=80"},
        {name: "Aqua Cake", image:"https://images.unsplash.com/photo-1604413191066-4dd20bedf486?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"},
        {name: "Black White Cake", image:"https://images.unsplash.com/photo-1557925923-cd4648e211a0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"},
        {name: "Sparkling Cake", image:"https://images.unsplash.com/photo-1559553156-2e97137af16f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=433&q=80"},
        // {name: "Fruit Cake", image:"https://images.unsplash.com/photo-1608830597604-619220679440?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"},
        {name: "Chocolate Ganache Cake", image:"https://images.unsplash.com/photo-1626803775151-61d756612f97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"}
    ]
  return (
    <>
        <Typography variant="h4" mt={6} mb={6}>Cakes - </Typography>
        <Stack direction="row" justifyContent="space-evenly" sx={{flexWrap:"wrap"}}>
            {
                cakes.map(cake=>{
                    return(
                        <Card sx={{ maxWidth: "300px", mb:2 }}>
                            <CardMedia
                            component="img"
                            height="200"
                            image={cake.image}
                            alt="green iguana"
                            />
                            <CardContent>
                            <Typography  variant="h5" >
                                {cake.name}
                            </Typography>
                            </CardContent>
                        </Card>

                    )
                })
            }

        </Stack>
 
    </>

  )
}

export default CakeSection
