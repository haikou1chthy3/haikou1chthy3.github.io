import{p as i,w as a,m as t,f as l}from"./q-ff6b136f.js";const o=void 0;function s(e){const n=Object.assign({p:"p",ol:"ol",li:"li",ul:"ul",pre:"pre",code:"code",span:"span"},e.components);return t(l,{children:[t(n.p,{children:"[图片]"}),`
`,t(n.ol,{children:[`
`,t(n.li,{children:`堆排序 【重要】
算法介绍`}),`
`]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:`算法思想
底层是「数组」，可能涉及「扩容」的问题，「上浮」和「下沉」操作。`}),`
`,t(n.li,{children:`算法特点
堆，在数组上的树，在一些语言中也称为「优先队列」，实际上堆只是优先队列最好的实现；
与其类似结构：「并查集」和「线段树」（重要），「索引堆」、「多叉堆」
算法代码`}),`
`]}),`
`,t(n.pre,{children:t(n.code,{class:"language-java",children:[t(n.span,{class:"token keyword",children:"public"})," ",t(n.span,{class:"token keyword",children:"class"})," ",t(n.span,{class:"token class-name",children:"Solution"})," ",t(n.span,{class:"token punctuation",children:"{"}),`

    `,t(n.span,{class:"token keyword",children:"public"})," ",t(n.span,{class:"token keyword",children:"int"}),t(n.span,{class:"token punctuation",children:"["}),t(n.span,{class:"token punctuation",children:"]"})," ",t(n.span,{class:"token function",children:"sortArray"}),t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"}),t(n.span,{class:"token punctuation",children:"["}),t(n.span,{class:"token punctuation",children:"]"})," nums",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
        `,t(n.span,{class:"token keyword",children:"int"})," len ",t(n.span,{class:"token operator",children:"="})," nums",t(n.span,{class:"token punctuation",children:"."}),"length",t(n.span,{class:"token punctuation",children:";"}),`
        `,t(n.span,{class:"token comment",children:"// 将数组整理成堆"}),`
        `,t(n.span,{class:"token function",children:"heapify"}),t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:")"}),t(n.span,{class:"token punctuation",children:";"}),`

        `,t(n.span,{class:"token comment",children:"// 循环不变量：区间 [0, i] 堆有序"}),`
        `,t(n.span,{class:"token keyword",children:"for"})," ",t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"})," i ",t(n.span,{class:"token operator",children:"="})," len ",t(n.span,{class:"token operator",children:"-"})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:";"})," i ",t(n.span,{class:"token operator",children:">="})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:";"})," ",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
            `,t(n.span,{class:"token comment",children:"// 把堆顶元素（当前最大）交换到数组末尾"}),`
            `,t(n.span,{class:"token function",children:"swap"}),t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token number",children:"0"}),t(n.span,{class:"token punctuation",children:","})," i",t(n.span,{class:"token punctuation",children:")"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token comment",children:"// 逐步减少堆有序的部分"}),`
            i`,t(n.span,{class:"token operator",children:"--"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token comment",children:"// 下标 0 位置下沉操作，使得区间 [0, i] 堆有序"}),`
            `,t(n.span,{class:"token function",children:"siftDown"}),t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token number",children:"0"}),t(n.span,{class:"token punctuation",children:","})," i",t(n.span,{class:"token punctuation",children:")"}),t(n.span,{class:"token punctuation",children:";"}),`
        `,t(n.span,{class:"token punctuation",children:"}"}),`
        `,t(n.span,{class:"token keyword",children:"return"})," nums",t(n.span,{class:"token punctuation",children:";"}),`
    `,t(n.span,{class:"token punctuation",children:"}"}),`

    `,t(n.span,{class:"token comment",children:`/**
     * 将数组整理成堆（堆有序）
     *
     * @param nums
     */`}),`
    `,t(n.span,{class:"token keyword",children:"private"})," ",t(n.span,{class:"token keyword",children:"void"})," ",t(n.span,{class:"token function",children:"heapify"}),t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"}),t(n.span,{class:"token punctuation",children:"["}),t(n.span,{class:"token punctuation",children:"]"})," nums",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
        `,t(n.span,{class:"token keyword",children:"int"})," len ",t(n.span,{class:"token operator",children:"="})," nums",t(n.span,{class:"token punctuation",children:"."}),"length",t(n.span,{class:"token punctuation",children:";"}),`
        `,t(n.span,{class:"token comment",children:"// 只需要从 i = (len - 1) / 2 这个位置开始逐层下移"}),`
        `,t(n.span,{class:"token keyword",children:"for"})," ",t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"})," i ",t(n.span,{class:"token operator",children:"="})," ",t(n.span,{class:"token punctuation",children:"("}),"len ",t(n.span,{class:"token operator",children:"-"})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token operator",children:"/"})," ",t(n.span,{class:"token number",children:"2"}),t(n.span,{class:"token punctuation",children:";"})," i ",t(n.span,{class:"token operator",children:">="})," ",t(n.span,{class:"token number",children:"0"}),t(n.span,{class:"token punctuation",children:";"})," i",t(n.span,{class:"token operator",children:"--"}),t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
            `,t(n.span,{class:"token function",children:"siftDown"}),t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:","})," i",t(n.span,{class:"token punctuation",children:","})," len ",t(n.span,{class:"token operator",children:"-"})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:")"}),t(n.span,{class:"token punctuation",children:";"}),`
        `,t(n.span,{class:"token punctuation",children:"}"}),`
    `,t(n.span,{class:"token punctuation",children:"}"}),`

    `,t(n.span,{class:"token comment",children:`/**
     * @param nums
     * @param k    当前下沉元素的下标
     * @param end  [0, end] 是 nums 的有效部分
     */`}),`
    `,t(n.span,{class:"token keyword",children:"private"})," ",t(n.span,{class:"token keyword",children:"void"})," ",t(n.span,{class:"token function",children:"siftDown"}),t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"}),t(n.span,{class:"token punctuation",children:"["}),t(n.span,{class:"token punctuation",children:"]"})," nums",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token keyword",children:"int"})," k",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token keyword",children:"int"})," end",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
        `,t(n.span,{class:"token keyword",children:"while"})," ",t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token number",children:"2"})," ",t(n.span,{class:"token operator",children:"*"})," k ",t(n.span,{class:"token operator",children:"+"})," ",t(n.span,{class:"token number",children:"1"})," ",t(n.span,{class:"token operator",children:"<="})," end",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
            `,t(n.span,{class:"token keyword",children:"int"})," j ",t(n.span,{class:"token operator",children:"="})," ",t(n.span,{class:"token number",children:"2"})," ",t(n.span,{class:"token operator",children:"*"})," k ",t(n.span,{class:"token operator",children:"+"})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token keyword",children:"if"})," ",t(n.span,{class:"token punctuation",children:"("}),"j ",t(n.span,{class:"token operator",children:"+"})," ",t(n.span,{class:"token number",children:"1"})," ",t(n.span,{class:"token operator",children:"<="})," end ",t(n.span,{class:"token operator",children:"&&"})," nums",t(n.span,{class:"token punctuation",children:"["}),"j ",t(n.span,{class:"token operator",children:"+"})," ",t(n.span,{class:"token number",children:"1"}),t(n.span,{class:"token punctuation",children:"]"})," ",t(n.span,{class:"token operator",children:">"})," nums",t(n.span,{class:"token punctuation",children:"["}),"j",t(n.span,{class:"token punctuation",children:"]"}),t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
                j`,t(n.span,{class:"token operator",children:"++"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token punctuation",children:"}"}),`
            `,t(n.span,{class:"token keyword",children:"if"})," ",t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:"["}),"j",t(n.span,{class:"token punctuation",children:"]"})," ",t(n.span,{class:"token operator",children:">"})," nums",t(n.span,{class:"token punctuation",children:"["}),"k",t(n.span,{class:"token punctuation",children:"]"}),t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
                `,t(n.span,{class:"token function",children:"swap"}),t(n.span,{class:"token punctuation",children:"("}),"nums",t(n.span,{class:"token punctuation",children:","})," j",t(n.span,{class:"token punctuation",children:","})," k",t(n.span,{class:"token punctuation",children:")"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token punctuation",children:"}"})," ",t(n.span,{class:"token keyword",children:"else"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
                `,t(n.span,{class:"token keyword",children:"break"}),t(n.span,{class:"token punctuation",children:";"}),`
            `,t(n.span,{class:"token punctuation",children:"}"}),`
            k `,t(n.span,{class:"token operator",children:"="})," j",t(n.span,{class:"token punctuation",children:";"}),`
        `,t(n.span,{class:"token punctuation",children:"}"}),`
    `,t(n.span,{class:"token punctuation",children:"}"}),`

    `,t(n.span,{class:"token keyword",children:"private"})," ",t(n.span,{class:"token keyword",children:"void"})," ",t(n.span,{class:"token function",children:"swap"}),t(n.span,{class:"token punctuation",children:"("}),t(n.span,{class:"token keyword",children:"int"}),t(n.span,{class:"token punctuation",children:"["}),t(n.span,{class:"token punctuation",children:"]"})," nums",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token keyword",children:"int"})," index1",t(n.span,{class:"token punctuation",children:","})," ",t(n.span,{class:"token keyword",children:"int"})," index2",t(n.span,{class:"token punctuation",children:")"})," ",t(n.span,{class:"token punctuation",children:"{"}),`
        `,t(n.span,{class:"token keyword",children:"int"})," temp ",t(n.span,{class:"token operator",children:"="})," nums",t(n.span,{class:"token punctuation",children:"["}),"index1",t(n.span,{class:"token punctuation",children:"]"}),t(n.span,{class:"token punctuation",children:";"}),`
        nums`,t(n.span,{class:"token punctuation",children:"["}),"index1",t(n.span,{class:"token punctuation",children:"]"})," ",t(n.span,{class:"token operator",children:"="})," nums",t(n.span,{class:"token punctuation",children:"["}),"index2",t(n.span,{class:"token punctuation",children:"]"}),t(n.span,{class:"token punctuation",children:";"}),`
        nums`,t(n.span,{class:"token punctuation",children:"["}),"index2",t(n.span,{class:"token punctuation",children:"]"})," ",t(n.span,{class:"token operator",children:"="})," temp",t(n.span,{class:"token punctuation",children:";"}),`
    `,t(n.span,{class:"token punctuation",children:"}"}),`
`,t(n.span,{class:"token punctuation",children:"}"}),`
`]})}),`
`,t(n.ol,{start:"2",children:[`
`,t(n.li,{children:`快排【重要】
算法介绍`}),`
`]}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:`算法思想
采用了partition的思想，分治但不进行归并`}),`
`,t(n.li,{children:`算法特点
有序/逆序数组进行「快速排序」会变得非常慢（等同于冒泡排序或者「选择排序」）
算法代码
基本快速排序
\`\`\`java
import java.util.Random;`}),`
`]}),`
`,t(n.p,{children:"public class Solution {"}),`
`,t(n.pre,{children:t(n.code,{children:`// 快速排序 1：基本快速排序

/**
 * 列表大小等于或小于该大小，将优先于 quickSort 使用插入排序
 */
private static final int INSERTION_SORT_THRESHOLD = 7;

private static final Random RANDOM = new Random();


public int[] sortArray(int[] nums) {
    int len = nums.length;
    quickSort(nums, 0, len - 1);
    return nums;
}

private void quickSort(int[] nums, int left, int right) {
    // 小区间使用插入排序
    if (right - left <= INSERTION_SORT_THRESHOLD) {
        insertionSort(nums, left, right);
        return;
    }

    int pIndex = partition(nums, left, right);
    quickSort(nums, left, pIndex - 1);
    quickSort(nums, pIndex + 1, right);
}

/**
 * 对数组 nums 的子区间 [left, right] 使用插入排序
 *
 * @param nums  给定数组
 * @param left  左边界，能取到
 * @param right 右边界，能取到
 */
private void insertionSort(int[] nums, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = nums[i];
        int j = i;
        while (j > left && nums[j - 1] > temp) {
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
}

private int partition(int[] nums, int left, int right) {
    int randomIndex = RANDOM.nextInt(right - left + 1) + left;
    swap(nums, left, randomIndex);

    // 基准值
    int pivot = nums[left];
    int lt = left;
    // 循环不变量：
    // all in [left + 1, lt] < pivot
    // all in [lt + 1, i) >= pivot
    for (int i = left + 1; i <= right; i++) {
        if (nums[i] < pivot) {
            lt++;
            swap(nums, i, lt);
        }
    }
    swap(nums, left, lt);
    return lt;
}

private void swap(int[] nums, int index1, int index2) {
    int temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
`})}),`
`,t(n.p,{children:"}"}),`
`,t(n.p,{children:"```"}),`
`,t(n.p,{children:`算法优化点
主要优化点在于树的高度，譬如`}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:"「二叉搜索树」优化成「AVL 树」或者「红黑树」"}),`
`,t(n.li,{children:"「并查集」的「按秩合并」与「路径压缩」"}),`
`]}),`
`,t(n.p,{children:"双指针快速排序\n```java\nimport java.util.Random;"}),`
`,t(n.p,{children:"public class Solution {"}),`
`,t(n.pre,{children:t(n.code,{children:`// 快速排序 2：双指针（指针对撞）快速排序

/**
 * 列表大小等于或小于该大小，将优先于 quickSort 使用插入排序
 */
private static final int INSERTION_SORT_THRESHOLD = 7;

private static final Random RANDOM = new Random();

public int[] sortArray(int[] nums) {
    int len = nums.length;
    quickSort(nums, 0, len - 1);
    return nums;
}

private void quickSort(int[] nums, int left, int right) {
    // 小区间使用插入排序
    if (right - left <= INSERTION_SORT_THRESHOLD) {
        insertionSort(nums, left, right);
        return;
    }

    int pIndex = partition(nums, left, right);
    quickSort(nums, left, pIndex - 1);
    quickSort(nums, pIndex + 1, right);
}

/**
 * 对数组 nums 的子区间 [left, right] 使用插入排序
 *
 * @param nums  给定数组
 * @param left  左边界，能取到
 * @param right 右边界，能取到
 */
private void insertionSort(int[] nums, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = nums[i];
        int j = i;
        while (j > left && nums[j - 1] > temp) {
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
}

private int partition(int[] nums, int left, int right) {
    int randomIndex = left + RANDOM.nextInt(right - left + 1);
    swap(nums, randomIndex, left);

    int pivot = nums[left];
    int lt = left + 1;
    int gt = right;

    // 循环不变量：
    // all in [left + 1, lt) <= pivot
    // all in (gt, right] >= pivot
    while (true) {
        while (lt <= right && nums[lt] < pivot) {
            lt++;
        }

        while (gt > left && nums[gt] > pivot) {
            gt--;
        }

        if (lt >= gt) {
            break;
        }

        // 细节：相等的元素通过交换，等概率分到数组的两边
        swap(nums, lt, gt);
        lt++;
        gt--;
    }
    swap(nums, left, gt);
    return gt;
}

private void swap(int[] nums, int index1, int index2) {
    int temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
`})}),`
`,t(n.p,{children:"}\n```"}),`
`,t(n.p,{children:"三指针快速排序\n```java\nimport java.util.Random;"}),`
`,t(n.p,{children:"public class Solution {"}),`
`,t(n.pre,{children:t(n.code,{children:`// 快速排序 3：三指针快速排序

/**
 * 列表大小等于或小于该大小，将优先于 quickSort 使用插入排序
 */
private static final int INSERTION_SORT_THRESHOLD = 7;

private static final Random RANDOM = new Random();

public int[] sortArray(int[] nums) {
    int len = nums.length;
    quickSort(nums, 0, len - 1);
    return nums;
}

private void quickSort(int[] nums, int left, int right) {
    // 小区间使用插入排序
    if (right - left <= INSERTION_SORT_THRESHOLD) {
        insertionSort(nums, left, right);
        return;
    }

    int randomIndex = left + RANDOM.nextInt(right - left + 1);
    swap(nums, randomIndex, left);

    // 循环不变量：
    // all in [left + 1, lt] < pivot
    // all in [lt + 1, i) = pivot
    // all in [gt, right] > pivot
    int pivot = nums[left];
    int lt = left;
    int gt = right + 1;

    int i = left + 1;
    while (i < gt) {
        if (nums[i] < pivot) {
            lt++;
            swap(nums, i, lt);
            i++;
        } else if (nums[i] == pivot) {
            i++;
        } else {
            gt--;
            swap(nums, i, gt);
        }
    }
    swap(nums, left, lt);
    // 注意这里，大大减少了两侧分治的区间
    quickSort(nums, left, lt - 1);
    quickSort(nums, gt, right);
}

/**
 * 对数组 nums 的子区间 [left, right] 使用插入排序
 *
 * @param nums  给定数组
 * @param left  左边界，能取到
 * @param right 右边界，能取到
 */
private void insertionSort(int[] nums, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = nums[i];
        int j = i;
        while (j > left && nums[j - 1] > temp) {
            nums[j] = nums[j - 1];
            j--;
        }
        nums[j] = temp;
    }
}

private void swap(int[] nums, int index1, int index2) {
    int temp = nums[index1];
    nums[index1] = nums[index2];
    nums[index2] = temp;
}
`})}),`
`,t(n.p,{children:"}"}),`
`,t(n.p,{children:`算法技巧点
写对「快速排序」的技巧：保持「循环不变量」，即定义的变量在「循环开始前」、「循环过程中」、「循环结束」以后，都保持不变的性质，这个性质是人为根据问题特点定义的。
「循环不变量」的内容在《算法导论》这本书里有介绍。
「循环不变量」是证明算法有效性的基础，更是写对代码的保证，遵守循环不变量，是不是该写等于号，先交换还是先 ++ ，就会特别清楚，绝对不会写错；
编码的时候，遵守的「循环不变量」作为注释可写在代码中。`}),`
`,t(n.p,{children:"参考例题"}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:"TopK 问题：「力扣」第 215 题：数组中的第 K 个最大元素；"}),`
`,t(n.li,{children:"荷兰国旗问题：「力扣」第 75 题：颜色分类"}),`
`]}),`
`,t(n.ol,{start:"3",children:[`
`,t(n.li,{children:`归并【重要】
算法介绍
「曹冲称象」、MapReduce，一定程度上分治可以并行化`}),`
`]}),`
`,t(n.p,{children:`算法代码
public class Solution {
// 归并排序`}),`
`,t(n.pre,{children:t(n.code,{children:`/**
 * 列表大小等于或小于该大小，将优先于 mergeSort 使用插入排序
 */
private static final int INSERTION_SORT_THRESHOLD = 7;

public int[] sortArray(int[] nums) {
    int len = nums.length;
    int[] temp = new int[len];
    mergeSort(nums, 0, len - 1, temp);
    return nums;
}

/**
 * 对数组 nums 的子区间 [left, right] 进行归并排序
 *
 * @param nums
 * @param left
 * @param right
 * @param temp  用于合并两个有序数组的辅助数组，全局使用一份，避免多次创建和销毁
 */
private void mergeSort(int[] nums, int left, int right, int[] temp) {
    // 小区间使用插入排序
    if (right - left <= INSERTION_SORT_THRESHOLD) {
        insertionSort(nums, left, right);
        return;
    }

    int mid = left + (right - left) / 2;
    // Java 里有更优的写法，在 left 和 right 都是大整数时，即使溢出，结论依然正确
    // int mid = (left + right) >>> 1;

    mergeSort(nums, left, mid, temp);
    mergeSort(nums, mid + 1, right, temp);
    // 如果数组的这个子区间本身有序，无需合并
    if (nums[mid] <= nums[mid + 1]) {
        return;
    }
    mergeOfTwoSortedArray(nums, left, mid, right, temp);
}

/**
 * 对数组 arr 的子区间 [left, right] 使用插入排序
 *
 * @param arr   给定数组
 * @param left  左边界，能取到
 * @param right 右边界，能取到
 */
private void insertionSort(int[] arr, int left, int right) {
    for (int i = left + 1; i <= right; i++) {
        int temp = arr[i];
        int j = i;
        while (j > left && arr[j - 1] > temp) {
            arr[j] = arr[j - 1];
            j--;
        }
        arr[j] = temp;
    }
}

/**
 * 合并两个有序数组：先把值复制到临时数组，再合并回去
 *
 * @param nums
 * @param left
 * @param mid   [left, mid] 有序，[mid + 1, right] 有序
 * @param right
 * @param temp  全局使用的临时数组
 */
private void mergeOfTwoSortedArray(int[] nums, int left, int mid, int right, int[] temp) {
    System.arraycopy(nums, left, temp, left, right + 1 - left);

    int i = left;
    int j = mid + 1;

    for (int k = left; k <= right; k++) {
        if (i == mid + 1) {
            nums[k] = temp[j];
            j++;
        } else if (j == right + 1) {
            nums[k] = temp[i];
            i++;
        } else if (temp[i] <= temp[j]) {
            // 注意写成 < 就丢失了稳定性（相同元素原来靠前的排序以后依然靠前）
            nums[k] = temp[i];
            i++;
        } else {
            // temp[i] > temp[j]
            nums[k] = temp[j];
            j++;
        }
    }
}
`})}),`
`,t(n.p,{children:`}
参考例题`}),`
`,t(n.ul,{children:[`
`,t(n.li,{children:"《剑指 Offer》第 51 题：数组中的逆序对，照着归并排序的思路就能写出来。"}),`
`,t(n.li,{children:"「力扣」第 315 题：计算右侧小于当前元素的个数，它们是一个问题。"}),`
`]})]})}function c(e={}){const{wrapper:n}=e.components||{};return n?t(n,Object.assign({},e,{children:t(s,e)})):s(e)}const p=()=>i(a,{children:i(c,{},3,null)},3,"yh8tFMCU");export{p as default,o as frontmatter};
