#### Abstract
This work reports our solution to the SemEval 2024 competition, which addresses the EDiReF task. Our study has been developed in a step-wise manner, beginning with a foundational baseline consisting of a BERT-based encoder and two classification heads, and progressively enhancing it, by adding relevant features such as the speaker-specific context and modifying the underlying encoder model.
One classification head uses only linear layers and it is dedicated to emotion detection, mantaining the focus only on the current utterance. Viceversa, the other head, which employs LSTM, is aimed at trigger identification exploiting a broader context. 
As expected, current utterance data alone is sufficient for reliable emotion prediction, whereas identifying triggers requires prior context. Surprisingly, adding speaker information did not aid in identifying triggers but enhanced emotion detection. The choice of the underlying encoder model also plays a crucial role in the effectiveness of both tasks.

The source code is available on [github](https://github.com/oshodiS/NLP/tree/main/Project)