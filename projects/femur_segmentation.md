#### Abstract
2D and 3D Binary Segmentation in the medical field is crucial as it provides doctors with valuable information for patient diagnosis and treatment. Femur segmentation, in particular, allows for precise isolation of bones from other tissues, aiding in the assessment of fracture risk in older individuals.

This study aims to enhance 3D femur segmentation from CT images. 
Starting from TotalSegmentator as baseline, which is a 3D full-resolution nnUNet, and a small dataset of 40 CT femur images provided by Ospedale Rizzoli, our contribution is to try different Deep Learning methods to surpass its performance.

Our research has focused on both 3D and 2D methods for medical image segmentation. Specifically, we fine-tuned Total Segmentator for 3D methods, and trained UNet  and UNet++ with ResNet50, ResNet34, and DeepLabv3 backbones for 2D methods. We evaluated these models using metrics such as Dice score, mean Intersection over Union (mIOU), and Volume Similarity.

Our findings indicate that fine-tuning a large 3D UNet on a small dataset is suboptimal as evidenced by the lower scores obtained in our experiments. Additionally, UNet++ consistently outperformed UNet, and the DeepLabV3 backbone demonstrated better performances in segmenting entire femurs, achieving a Dice score of 0.952. Meanwhile, the ResNet50 backbone proved to be more effective for segmenting femur heads, with a Dice score of 0.970.

The source code is available on [github](https://github.com/francesco-source/2D_3D_femur_segmentation).