function random_choice(seed) {
    if (seed == "rose") {
        var images = ['https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/rose3.png?alt=media&token=691c5682-0ddb-4a38-8197-09d143ef2040', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/rose3_yellow.png?alt=media&token=5dcd2231-15cb-4776-a46f-1e1caf1e2a21', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/rose3_white.png?alt=media&token=dac14c21-019b-4027-9a04-3c8d848a72dd','https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/rose3_orange.png?alt=media&token=3a7482f3-0346-44b9-b322-6b50a5011a8a'];
    } else if (seed == "cosmos") {
        var images = ['https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3.png?alt=media&token=0ca30a09-fcb0-42bd-a1ad-d51e48b3aaf5', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3_red.png?alt=media&token=834adf4a-6f2f-41e0-9990-3dc98a5de29c', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/cosmos3_white.png?alt=media&token=8c33490d-d851-4936-84d3-5a58fcdfaea1'];
    } else if (seed == "pansy") {
        var images = ['https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/pansy3.png?alt=media&token=46afa025-ea4a-42ef-b6a3-570ad63b395a', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/pansy3_purple.png?alt=media&token=dab89c47-1059-4dac-9edf-6e8553498956', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/pansy3_white.png?alt=media&token=b864b172-db56-4dee-9052-97a1b3af1014', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/pansy3_yellow.png?alt=media&token=0122ee5c-231d-43bd-9c10-d7926aed417a'];
    } else if (seed == "tulips") {
        var images = ['https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_orange.png?alt=media&token=18c6d0e5-cc81-4d17-971e-a75acc433841','https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_pink.png?alt=media&token=80304804-aaa3-4eee-a1ef-8d0a4a3987a4', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_purple.png?alt=media&token=b5700c92-f495-4757-af94-ad9f7776975e', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_red.png?alt=media&token=4ad89090-e40f-4f48-894f-6d026ec97558', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_white.png?alt=media&token=1bf5e18d-f5c4-4363-a145-58c5ff1342e6', 'https://firebasestorage.googleapis.com/v0/b/grow-plant-webapp.appspot.com/o/tulip_yellow.png?alt=media&token=f733e5eb-dfca-4071-9f68-aa4b2ed8e9b0']
    }
    const imageNo = Math.floor(Math.random() * images.length)
    return images[imageNo];
}