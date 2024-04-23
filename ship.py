# import cv2
#
# # 视频文件路径
# video_path = 'D:/桌面/1.mp4'
#
# # 打开视频文件
# cap = cv2.VideoCapture(video_path)
#
# # 获取视频的编码格式
# fourcc = int(cap.get(cv2.CAP_PROP_FOURCC))
#
# # 将四字符编码转换为字符串格式
# codec = "".join([chr((fourcc >> 8 * i) & 0xFF) for i in range(4)])
#
# # 输出编码格式
# print(f"Video codec: {codec}")
#
# # 释放资源
# cap.release()



import cv2

# Load the input video
input_video_path = 'D:/桌面/2.mp4'
cap = cv2.VideoCapture(input_video_path)

# Set up the VideoWriter for output
output_video_path = 'D:/桌面/3.mp4'
# fourcc = cv2.VideoWriter_fourcc(*'mp4v')  # Codec for MP4V
fourcc = cv2.VideoWriter_fourcc('X','2','6','4')
if cv2.VideoWriter_fourcc(*'X264'):
    print("X264 codec is supported")
# if cv2.VideoWriter_fourcc(*'mp4v'):
#     print("keyi")
fps = int(cap.get(cv2.CAP_PROP_FPS))
width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
out = cv2.VideoWriter(output_video_path, fourcc, fps, (width, height))


# Read frames, encode, and write to the output video
while cap.isOpened():
    ret, frame = cap.read()
    if not ret:
        break
    out.write(frame)

# Release resources
cap.release()
out.release()

#
# import cv2
#
# # Load the input video
# input_video_path = 'D:/桌面/2.mp4'
# cap = cv2.VideoCapture(input_video_path)
#
# # Set up the VideoWriter for output with X264 codec
# output_video_path = 'D:/桌面/3.mp4'
# fourcc = cv2.VideoWriter_fourcc(*'X264')  # Codec for X264
# if cv2.VideoWriter_fourcc(*'X264'):
#     print("X264 codec is supported")
# fps = int(cap.get(cv2.CAP_PROP_FPS))
# width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
# height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
# out = cv2.VideoWriter(output_video_path, fourcc, fps, (width, height))
#
# # Read frames, encode, and write to the output video
# while cap.isOpened():
#     ret, frame = cap.read()
#     if not ret:
#         break
#     out.write(frame)
#
# # Release resources
# cap.release()
# out.release()
#


# import os
# os.environ['PATH'] = r'D:\桌面\openh264.dll;' + os.environ['PATH']
