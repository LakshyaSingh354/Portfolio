"use client";

import Image from "next/image";
import CodeBlock from "../../../../components/codeblock";
import { CopyBlock, dracula } from "react-code-blocks";

const code1 = `
def quantize(ab_img):
    return np.floor_divide(ab_img, 10) * 10
    
def set_possible_colors():
  height, width = 256, 256
  ab_to_possible_color = {}
  all_images = os.listdir("images")
  color_index = 0

  for image in all_images:
    rgb_image = np.array(
      Image.open(f"images/{image}")
      .convert("RGB"))
    ab_img = extract_ab(rgb_image)
    quantized_image = quantize_(ab_img)

    for y in range(height):
      for x in range(width):
        a = quantized_ab_image[y][x][0]
        b = quantized_ab_image[y][x][1]
        ck = get_color_key(a, b)

        if ck not in ab_to_possible_color:
          ab_to_possible_color[ck] = color_index
          color_index += 1
  if save_files:
    pickle.dump(ab_to_possible_color,
      open("ab_to_q_index_dict.p", "wb"))
`;
const code2 = `
def ab_to_z(ab_img, Q, sigma=5):
    w, h = ab_img.shape[0], ab_img.shape[1]
    pts = w * h
    ab_img_flat = np.reshape(ab_img, (pts, 2))
    pts_flat = np.empty((pts, Q))
    pts_ind = np.arange(0, pts)

    nbrs = NearestNeighbors(
      n_neighbors=5, algorithm='ball_tree')
      .fit(get_ab_domain())
    distances, _ = nbrs.kneighbors(ab_img_flat)

    gaussian_kernel = np.exp(
      -distances**2 / (2 * sigma**2)
    )
    gaussian_kernel /= np.sum(gaussian_kernel,1)

    pts_flat[pts_ind, ind] = gaussian_kernel
    z = np.reshape(pts_flat, (w, h, Q))

    return z
`;
const code3 = `def multinomial_crossentropy_loss(Z, Z_hat):
    Q = len(get_ab_to_q_dict())
    p = pickle.load(open("p_10000.p", "rb"))
    p_tilde = gaussian_filter(p, sigma=5)
    eps = 0.0001
    weights = get_loss_weights(Z, Q, p_tilde)
    log = tf.math.log(Z_hat + eps)
    mul = log * Z
    summ = tf.reduce_sum(mul, 1) 
    loss = -tf.reduce_sum(weights * summ)

    return loss`;
const code4 = `def ColourNet():
    input_tensor = Input(shape=(256, 256, 1))
    x = Conv2D(64, (3, 3),'relu', 'same', 
            "he_normal", l2_reg)(input_tensor)
    x = Conv2D(64, (3, 3),'relu', 'same', 
            "he_normal", l2_reg, (2, 2))(x)
    x = BatchNormalization()(x)

    x = Conv2D(128, (3, 3),'relu', 'same', 
            "he_normal", l2_reg)(x)
    x = Conv2D(128, (3, 3),'relu', 'same', 
            "he_normal", l2_reg, (2, 2))(x)
    x = BatchNormalization()(x)

    x = Conv2D(256, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(256, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(256, (3, 3),'relu', 'same', 
            "he_normal", (2, 2))(x)
    x = BatchNormalization()(x)

    x = Conv2D(512, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = BatchNormalization()(x)

    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = BatchNormalization()(x)

    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = Conv2D(512, (3, 3),'relu', 'same', 
      dilation_rate=2, "he_normal", l2_reg)(x)
    x = BatchNormalization()(x)

    x = Conv2D(256, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(256, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(256, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = BatchNormalization()(x)

    x = UpSampling2D(size=(2, 2))(x)
    x = Conv2D(128, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(128, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = Conv2D(128, (3, 3),'relu', 'same',
            "he_normal", l2_reg)(x)
    x = BatchNormalization()(x)

    x = Conv2D(274, (1, 1),'softmax', 'same')(x)
    outputs = UpSampling2D(size=(4, 4), 
      interpolation='bilinear')(x)
    model = Model(input_tensor, outputs)

    return model`;
const code5 = `def temperature_scaling(Z, T):
    Z = np.exp(np.log(Z) / T)
    Z /= np.sum(Z, axis=-1, keepdims=True)

    return Z

def convert_Z_to_ab(Z, ab_domain, T=0.38):
    Z = temperature_scaling(Z, T)
    
    ab_output = np.dot(Z, ab_domain)
    
    return ab_output`;

// app/projects/[projectId]/page.tsx
export default function ProjectPage({ params }: { params: any }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-black opacity-60 w-full"></div>
      <div className="relative z-10">
        <div className="mt-28 w-screen flex flex-col items-center">
          <div className="sm:w-auto sm:px-0 px-10 text-6xl text-white font-extrabold">
            Colouring Manga Using Deep Learning
          </div>
        </div>
        <div className="flex justify-center items-center mt-20 sm:px-0 px-10">
          <Image
            src={"/projects/manga-colouring/cover.png"}
            alt={"cover-image"}
            width={1200}
            height={300}
          />
        </div>
        <div className="mt-14 sm:w-auto w-screen">
          <div className="sm:mx-24 mx-4 text-xl">
            In this project I explore the use of Deep Learning, specifically
            Convolutional Neural Networks (CNNs) to colour manga images. The
            project is inspired by the paper titled{" "}
            <a
              href="https://arxiv.org/abs/1603.08511"
              className="text-blue-400"
            >
              &quot;Colorful Image Colorization&quot;
            </a>{" "}
            by Richard Zhang, Phillip Isola and Alexei A. Efros. The paper
            proposes more of a general framework of colouring images, but I
            wanted to see how well it would work on manga images. The results
            were quite impressive, and I was able to achieve a good level of
            colouring on the images.
          </div>
          <div className="mt-4 sm:sm:mx-24 mx-4 m-4 text-xl">
            The model in the paper is trained on the ImageNet dataset, which is
            a more general dataset than the one required for the task of
            colouring manga images. But thankfully the dataset required for the
            task of colouring is not hard to curate, only coloured images are
            required and features and labels can be extracted from them.
          </div>
          <div className="mt-14 sm:sm:mx-24 mx-4 text-4xl font-bold">
            Creating Training Data:
          </div>
          <div className="mt-6 sm:sm:mx-24 mx-4 m-4 text-xl">
            The images required are obtained by writing a web-scraping python
            script that automatically searches and downloads tagged images from
            the imaging hosting website, Danbooru. Danbooru is ideal for this
            purpose as it has a vast collection of tagged images, and the images
            are of high quality. I downloaded approximately 10,000 images for
            the task. The images are then preprocessed and resized into a 256 X
            256 square. They are further processed and converted to the LAB
            colour space. The L channel is used as the input to the model, and
            the AB channels are used as the labels.
          </div>
          <div className="mt-14 sm:mx-24 mx-4 text-4xl font-bold">Model Details:</div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            <p>
              The model is a CNN designed to The model is a Convolutional Neural
              Network designed to predict the ‘a’ and ‘b’ channels of the Lab
              color space given the ‘L’ channel. Previous works in this area
              treat the problem of colouring as a regression task and use the
              mean squared error loss function. They aim to predict the exact
              values of the ‘a’ and ‘b’ channels for every pixel.
            </p>
            <p className="mt-2">
              However, the model in the paper treats the problem as a
              classification task and uses a custom loss function which is a
              variation of categorical crossentropy loss. They quantise the ‘a’
              and ‘b’ channels into bins and predict the probability of each bin
              for every pixel. This approach is more robust and produces more
              realistic and visually appealing results.
            </p>
            <p className="mt-2">
              I train a CNN to map from a grayscale input to a distribution over
              quantised colour value outputs using the architecture shown below.
              {/* Architectural and specific implementation details can be found in
              my Github repository{" "}
              <a
                href="https://github.com/LakshyaSingh354/Manga-Colouring"
                className="text-blue-400"
                target="_blank"
              >
                here
              </a>
              . */}
            </p>
          </div>
          <div className="flex justify-center items-center mt-20">
            <figure className="w-2/3">
              <Image
                src={"/projects/manga-colouring/architecture.png"}
                alt={"architecture"}
                width={930}
                height={300}
              />
              <figcaption className="text-lg mt-1">
                Architecture as described in the paper. Each conv layer refers
                to a block of 2 or 3 repeated conv and ReLU layers, followed by
                a BatchNorm [30] layer. The net has no pool layers. All changes
                in resolution are achieved through spatial downsampling or
                upsampling between conv blocks.
              </figcaption>
            </figure>
          </div>
          <div className="mt-14 sm:mx-24 mx-4 text-3xl font-bold">
            Key components of implementation:
          </div>
          <div className="mt-10 sm:mx-24 mx-4 text-2xl font-bold">
            1. Quantisation of the AB channels:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            The AB channels are quantised into 274 bins. The bins are determined
            by clustering the AB channels of the training data into 274 clusters
            using K-means clustering. The model then predicts the probability of
            each bin for every pixel.
          </div>
          <div className="mt-4 sm:mx-24 mx-4">
            <CopyBlock
              text={code1}
              language="python"
              showLineNumbers={false}
              theme={dracula}
            />
          </div>
          <div className="mt-10 sm:mx-24 mx-4 text-2xl font-bold">
            2. Converting AB channels to probability distribution:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            The AB channels are converted to a probability distribution.
          </div>
          <div className="mt-4 sm:mx-24 mx-4">
            <CopyBlock
              text={code2}
              language="python"
              showLineNumbers={false}
              theme={dracula}
            />
          </div>
          <div className="mt-10 sm:mx-24 mx-4 text-2xl font-bold">
            3. Loss function:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            The loss function is a variation of categorical crossentropy loss
            which includes components like class-rebalancing to account for the
            imbalance of colours in the dataset.
          </div>
          <div className="mt-4 sm:mx-24 mx-4">
            <CopyBlock
              text={code3}
              language="python"
              showLineNumbers={false}
              theme={dracula}
            />
          </div>
          <div className="mt-10 sm:mx-24 mx-4 text-2xl font-bold">
            4. Model architecture:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            The model is a CNN as described above. The model is trained on the
            training data for 1000 epochs.
          </div>
          <div className="mt-4 sm:mx-24 mx-4">
            <CopyBlock
              text={code4}
              language="python"
              showLineNumbers={false}
              theme={dracula}
            />
          </div>
          <div className="mt-10 sm:mx-24 mx-4 text-2xl font-bold">
            5. Converting probability distribution to AB channels:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            The probability distribution output by the model is converted back
            to AB channels after applying temperature scaling.
          </div>
          <div className="mt-4 sm:mx-24 mx-4">
            <CopyBlock
              text={code5}
              language="python"
              showLineNumbers={false}
              theme={dracula}
            />
            <div className="mt-4 text-xl">
              For more details on the implementation, you can check out the code
              on my github repo{" "}
              <a
                href="https://github.com/LakshyaSingh354/Manga-Colouring"
                className="text-blue-400"
              >
                here
              </a>
              .
            </div>
          </div>
          <div className="mt-14 sm:mx-24 mx-4 text-4xl font-bold">
            Results and Model Evaluation:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            <p>
              In the paper, the team has employed a process similar to Turing
              Test to evaluate their model, but in this process I try to
              evaluate my model on some quantitative metrics like Mean Squared
              Error (MSE), Mean Absolute Error (MAE) and Peak Signal to Noise
              Ratio (PSNR).
            </p>
            <p className="mt-2">
              The model performs fairly well with mse of 0.0012, mae of 0.0034
              and psnr of 37. Below are some results that are indicative of how
              the model performs on anime inspired art.
            </p>
          </div>
          <div className="sm:mx-24 mx-4 mt-8">
            <div>
              <Image
                src={"/projects/manga-colouring/output1.png"}
                alt={"result1"}
                width={1000}
                height={500}
              />
            </div>
            <div className="mt-4">
              <Image
                src={"/projects/manga-colouring/output2.png"}
                alt={"result2"}
                width={1000}
                height={500}
              />
            </div>
            <div className="mt-4">
              <Image
                src={"/projects/manga-colouring/output3.png"}
                alt={"result3"}
                width={1000}
                height={500}
              />
            </div>
          </div>
          <div className="mt-14 sm:mx-24 mx-4 text-4xl font-bold">
            Improvements and Future Work:
          </div>
          <div className="mt-6 sm:mx-24 mx-4 text-xl">
            <p>
              The model performs fairly well on the task of colouring manga
              images, but there is still room for improvement. It is correctly
              predicting the areas to colour but is unable to accurately predict the
              exact colour, this may be due to lack of diversity of colour in
              the dataset. The model could be trained on a larger and more
              diverse dataset to improve its generalisation.
            </p>
          </div>
          <div>
            <div className="mt-14 sm:mx-24 mx-4 text-4xl font-bold">References:</div>
            <div className="mt-6 sm:mx-24 mx-4 text-xl mb-10">
              <ul>
                <li>
                  <a
                    href="https://github.com/LakshyaSingh354/Manga-Colouring"
                    className="text-blue-400"
                  >
                    My Github repository for the project.
                  </a>
                </li>
                <li>
                  <a
                    href="https://arxiv.org/abs/1603.08511"
                    className="text-blue-400"
                  >
                    Colorful Image Colorization
                  </a>{" "}
                  by Zhang et al.
                </li>
                <li>
                  <a
                    href="http://richzhang.github.io/colorization/"
                    className="text-blue-400"
                  >
                    Colorful Image Colorization Github repo.
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
