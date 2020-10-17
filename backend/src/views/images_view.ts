import Image from "../models/Image";

export default {
  render(image: Image) {
    return {
      id: image.id,
      url: `http://192.168.0.36:3333/uploads/${image.path}`,
    };
  },

  renderMany(images: Image[]) {
    return images.map((image) => this.render(image));
  },
};

// images: [
//   {
//     id: 1,
//     path: "1602641299198-previa2.png",
//   },
//   {
//     id: 2,
//     path: "1602641299199-previa.jpeg",
//   },
// ],
